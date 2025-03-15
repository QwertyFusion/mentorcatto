import { tool } from "@langchain/core/tools";
import { z } from "zod";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { MessagesAnnotation, StateGraph } from "@langchain/langgraph";
import { SystemMessage, ToolMessage } from "@langchain/core/messages";
import { config } from "dotenv";
import { User } from "../models/user.model.js";
import { UserLesson } from "../models/user_lesson.model.js";

config();

const llm = new ChatGoogleGenerativeAI({
    model: "gemini-2.0-flash",
    apiKey: process.env.GEMINI_API_KEY,
});

// Tool to save user’s preferred coding language
const savePreferredLanguage = tool(
    async ({ email, language }) => {
        const user = await User.findOne({ email });

        if (user.preferredLanguage === language) {
            return `User's preferred programming language was already set as "${language}". Nothing has been changed`;
        }
        // Delete all user lessons
        await UserLesson.deleteMany({ user: user._id });

        user.preferredLanguage = language;
        await user.save();
        return `User's preferred programming language has been saved as "${language}". And linked to your email "${email}". Please tell the user to reload the window to see the changes.`;
    },
    {
        name: "save_preferred_language",
        description: "Save the user's preferred programming language.",
        schema: z.object({
            email: z.string().describe("The email of the user"),
            language: z
                .string()
                .describe("The programming language chosen by the user"),
        }),
    }
);

// Tool to fetch platform details
const getPlatformDetails = tool(
    async ({ dummy }) => {
        return JSON.stringify({
            platform_name: "MentorCatto",
            developers: [
                "QwertyFusion(Rishi Banerjee)",
                "Ayush Ranjan",
                "Shreeya Das",
                "Stitipragyan Behera",
            ],
        });
    },
    {
        name: "get_platform_details",
        description:
            "Fetch details about the platform, including name, developers, and tech stack.",
        schema: z.object({
            dummy: z
                .string()
                .describe("Unused parameter, required due to API restrictions"),
        }),
    }
);

const getUserDetails = tool(
    async ({ email }) => {
        const user = await User.findOne({ email });
        if (!user) return "User not found.";

        // Fetch completed lessons
        const lessonsCompleted = await UserLesson.find({
            user: user._id,
        }).select("lessonTitle -_id");

        return JSON.stringify({
            user_name: user.name,
            user_email: user.email,
            user_preferredLanguage: user.preferredLanguage,
            user_lastLogin: user.lastLogin,
            user_lessonsCompleted: lessonsCompleted.map(
                (lesson) => lesson.lessonTitle
            ), // Return as an array
        });
    },
    {
        name: "get_user_details",
        description:
            "Fetch details about a user, including name, email, preferred programming language, last login, and completed lessons.",
        schema: z.object({
            email: z.string().describe("The email of the user"),
        }),
    }
);

// Register tools
const tools = [savePreferredLanguage, getPlatformDetails, getUserDetails];
const toolsByName = Object.fromEntries(tools.map((tool) => [tool.name, tool]));
const llmWithTools = llm.bindTools(tools);

// System Prompt
const SYSTEM_PROMPT = `You are the AI assistant for a Data Structures and Algorithms (DSA) learning platform named MentorCatto. Your role is to assist users with their programming and algorithm-related queries.

- If the user wants to save their preferred programming language, use the tool "save_preferred_language" with the user's email and the language they want to save.
- If the user asks about the platform's name, or developers, use the tool "get_platform_details" and reply with the needed answer.
- If the user asks about their details (name, email, preferred language, last login, or completed lessons), use the tool "get_user_details".
- **If the user asks for code, generate it in their preferred programming language. Fetch this from "get_user_details".**
- **Do NOT ask the user which language to use for the code. Only if they explicitly mention another language, use that instead.**
- If the question does not require a tool, respond naturally with useful information.
- Keep responses clear, concise, and informative.
- Do not disclose the user ID even if the user asks for it.
- Do not reply so concisely that the user will not know that changes are done or updates have been made.
- You can use markdown to reply. You can create tables, use different markup formats, and also send code using pre and code.
`;

async function llmCall(state) {
    const result = await llmWithTools.invoke([
        {
            role: "system",
            content: SYSTEM_PROMPT,
        },
        ...state.messages,
    ]);

    return {
        messages: [result],
    };
}

async function toolNode(state) {
    const results = [];
    const lastMessage = state.messages.at(-1);

    if (lastMessage?.tool_calls?.length) {
        for (const toolCall of lastMessage.tool_calls) {
            const tool = toolsByName[toolCall.name];
            const observation = await tool.invoke(toolCall.args);
            results.push(
                new ToolMessage({
                    content: observation,
                    tool_call_id: toolCall.id,
                })
            );
        }
    }

    return { messages: results };
}

// Conditional edge function
function shouldContinue(state) {
    const lastMessage = state.messages.at(-1);

    if (lastMessage?.tool_calls?.length) {
        return "Action";
    }
    return "__end__";
}

// Build workflow
const agentBuilder = new StateGraph(MessagesAnnotation)
    .addNode("llmCall", llmCall)
    .addNode("tools", toolNode)
    .addEdge("__start__", "llmCall")
    .addConditionalEdges("llmCall", shouldContinue, {
        Action: "tools",
        __end__: "__end__",
    })
    .addEdge("tools", "llmCall")
    .compile();

// Invoke
export async function invokeAgent(userMessage, userEmail) {
    const messages = [
        {
            role: "user",
            content: userMessage,
            email: userEmail,
        },
    ];
    const result = await agentBuilder.invoke({ messages });

    return JSON.stringify({ response: result.messages }, null, 2);
}
