import { tool } from "@langchain/core/tools";
import { z } from "zod";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { MessagesAnnotation, StateGraph } from "@langchain/langgraph";
import { SystemMessage, ToolMessage } from "@langchain/core/messages";
import { config } from "dotenv";
import { User } from "../models/user.model.js";
import { UserLesson } from "../models/user_lesson.model.js";
import { SectionNotes } from "../models/section_notes.model.js";
import { generateLessonContent } from "./lessonContentGenerator.js";
import { Module } from "../models/module.model.js";
import { Lesson } from "../models/lesson.model.js";
import { generateSectionNotes } from "./sectionNotesGenerator.js";

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

// Tool to fetch user details
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

// Tool to recreate content
const recreateLessonContent = tool(
    async ({ email, moduleNumber, lessonNumber, additionalInstructions }) => {
        // Fetch user using email
        const user = await User.findOne({ email });
        if (!user) return "User  not found.";

        // Fetch module using moduleNumber
        const module = await Module.findOne({ moduleNumber });
        if (!module) {
            return "Cannot find a module with the given module number. Please provide a valid module number.";
        }

        // Fetch the lesson using lessonNumber from the fetched module
        const lesson = await Lesson.findOne({
            module: module._id,
            number: lessonNumber,
        });
        if (!lesson) {
            return "Cannot find a lesson with the given lesson number in the specified module. Please provide valid lesson details.";
        }

        const lessonId = lesson._id;

        const userId = user._id;
        const preferredLanguage = user.preferredLanguage;
        if (!preferredLanguage) {
            return "User needs to set a preferred language before generating content.";
        }

        const generatedContent = await generateLessonContent(
            userId,
            lessonId,
            preferredLanguage,
            additionalInstructions
        );

        return `Let the User know that the lesson content has been successfully updated. Verify the content and tell the user if their needs are met in the new content, if not, then rerun this tool (do not tell user to rerun this tool). Here is the new content: ${generatedContent}`;
    },
    {
        name: "recreate_lesson_content",
        description:
            "Recreate lesson content based on user email, module number, lesson number, and additional instructions.",
        schema: z.object({
            email: z.string().describe("The email of the user"),
            moduleNumber: z
                .number()
                .describe("The module number to fetch the lesson from"),
            lessonNumber: z.number().describe("The lesson number to recreate"),
            additionalInstructions: z
                .string()
                .describe("Additional instructions for content generation"),
        }),
    }
);

// Tool to generate section notes
const sectionNoteGenerator = tool(
    async ({
        email,
        moduleNumber,
        lessonNumber,
        topic,
        sectionName,
        additionalInstructions,
    }) => {
        // Fetch user
        const user = await User.findOne({ email });
        if (!user) return "User not found.";

        let referenceNote = null;

        // Check if moduleNumber and lessonNumber are provided
        if (moduleNumber && lessonNumber) {
            const module = await Module.findOne({ moduleNumber });
            if (module) {
                const lesson = await Lesson.findOne({
                    module: module._id,
                    number: lessonNumber,
                });
                if (lesson) {
                    const userLesson = await UserLesson.findOne({
                        user: user._id,
                        lesson: lesson._id,
                    });

                    if (userLesson) {
                        referenceNote = userLesson.content;
                    }
                }
            }
        }

        // If no topic is provided, set it to null
        topic = topic || null;

        // Generate the section note
        const generatedNote = await generateSectionNotes(
            referenceNote,
            topic,
            additionalInstructions
        );

        // Default section name to "Uncategorized" if none is provided
        sectionName = sectionName?.trim() || "Uncategorized";

        // Find or create SectionNotes document for the user
        let userNotes = await SectionNotes.findOne({ userId: user._id });

        if (!userNotes) {
            userNotes = new SectionNotes({ userId: user._id, sections: [] });
        }

        // Find the section or create a new one
        let section = userNotes.sections.find((s) => s.name === sectionName);

        if (section) {
            // Append to existing section
            section.texts.push({ content: generatedNote });
        } else {
            // Create new section
            userNotes.sections.push({
                name: sectionName,
                texts: [{ content: generatedNote }],
            });
        }

        // Save the updated notes
        await userNotes.save();

        return `The section note has been successfully generated and saved under the section "${sectionName}". Here is the content: ${generatedNote}`;
    },
    {
        name: "section_note_generator",
        description:
            "Generate section notes based on user email, module number, lesson number, topic, section name, and additional instructions. " +
            "Users must provide at least a topic or both module and lesson numbers. " +
            "If no section name is given, notes are saved under 'Uncategorized'.",
        schema: z.object({
            email: z.string().describe("The email of the user"),
            moduleNumber: z
                .number()
                .optional()
                .describe(
                    "The module number to fetch the lesson from (optional, but required if lessonNumber is provided)"
                ),
            lessonNumber: z
                .number()
                .optional()
                .describe(
                    "The lesson number to fetch (optional, but required if moduleNumber is provided)"
                ),
            topic: z
                .string()
                .optional()
                .describe(
                    "The topic for generating notes (required if moduleNumber and lessonNumber are not provided)"
                ),
            sectionName: z
                .string()
                .optional()
                .describe(
                    "The name of the section for which notes are generated (defaults to 'Uncategorized' if not provided)"
                ),
            additionalInstructions: z
                .string()
                .optional()
                .describe(
                    "Additional instructions for content generation (optional)"
                ),
        }),
    }
);

// Register tools
const tools = [
    savePreferredLanguage,
    getPlatformDetails,
    getUserDetails,
    recreateLessonContent,
    sectionNoteGenerator,
];
const toolsByName = Object.fromEntries(tools.map((tool) => [tool.name, tool]));
const llmWithTools = llm.bindTools(tools);

// System Prompt
const SYSTEM_PROMPT = `You are the AI assistant for a Data Structures and Algorithms (DSA) learning platform named MentorCatto. Your role is to assist users with their programming and algorithm-related queries.

- If the user wants to save their preferred programming language, use the tool "save_preferred_language" with the user's email and the language they want to save.
- If the user asks about the platform's name or developers, use the tool "get_platform_details" and reply with the needed answer.
- If the user asks about their details (name, email, preferred language, last login, or completed lessons), use the tool "get_user_details".
- If the user wants to recreate lesson content, use the tool "recreate_lesson_content" with the user's email, module number, lesson number, and any additional instructions provided.
- If the user wants to generate section notes, they must provide **at least one of the following**:
  - If module number, lesson number and topic is provided, use them.
  - If only module number and lesson number is provided, use them, topic will be null.
  - Topic is basically the context/content that the user wants the note to be on. If the topic is provided, then no need to give module number and lesson number.
  - **Users cannot request note creation without mentioning at least a topic or both module and lesson numbers.** If they do, ask them to provide one of the valid sets of inputs before proceeding.
- **If the user asks for code, generate it in their preferred programming language (fetched from "get_user_details"), unless they explicitly specify another language.**  
- **If the user requests code in multiple languages (e.g., "HTML, CSS, and JavaScript"), provide the requested languages instead of the preferred language.**  
- **Always include a short explanation before the code block to help the user understand what the code does.**  
- If the question does not require a tool, respond naturally with useful information.
- Keep responses clear, concise, and informative.
- Do not disclose the user ID even if the user asks for it.
- Do not reply so concisely that the user will not know that changes are done or updates have been made.
- You can use markdown to format responses, create tables, and send code using proper formatting.
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
