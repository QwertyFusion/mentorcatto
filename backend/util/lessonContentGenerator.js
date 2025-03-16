import { Lesson } from "../models/lesson.model.js";
import { UserLesson } from "../models/user_lesson.model.js";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const generateLessonContent = async (
    userId,
    lessonId,
    preferredLanguage,
    additionalInstructions
) => {
    let lesson = await Lesson.findById(lessonId);
    if (!lesson) {
        throw new Error("Lesson not found.");
    }

    let userLesson = await UserLesson.findOne({
        user: userId,
        lesson: lessonId,
    });
    if (!userLesson) {
        userLesson = new UserLesson({
            user: userId,
            lesson: lessonId,
            content: "", // Start with empty content
            isCompleted: false,
        });
    }

    let existingContent = userLesson.content;

    // Prepare the prompt for the AI model
    const prompt = `You are a professional educator creating an engaging, structured lesson for an online DSA learning platform.  
    Generate a **high-quality lesson** on the topic **"${
        lesson.name
    }"** in **${preferredLanguage}**.  
    
    ${
        existingContent
            ? `Existing Content for lesson (Modify this content as per user needs which is mentioned in additional instructions):
        ${existingContent}`
            : ``
    }
    
    ### Important Guidelines:
    - The lesson should feel like a **teacher is explaining the topic** naturally.
    - **Dynamically decide** how to introduce the topic:  
      - Start with a real-world scenario, a question, an interesting fact, or a common misconception.  
    - Ensure the lesson **varies its structure** depending on the topic.  
    - Do not say stuff like normal conversation, just create couse content as if it is in a book. Also no need to mention the title of the lesson at the top.
    - Do not forget to use markdown effectively to make sure that the content is very readable. Do not feel restricted to use #, ## or ###. Everything is allowed for markdown format.
    - You can also use tables to display content.
    - Put visual representations in pre code block if any.
    - Additional Instructions from user side: **${additionalInstructions}**.

    ### **Important Guidelines:**
    - Use markdown **normally** for headings (#, ##, ###, etc.), bullet points, and formatting.
    - **Do not wrap the entire response in a single preformatted code block (\`\`\`).**
    - Use code blocks **only** when writing actual code (\`\`\`language) or ASCII diagrams.
    - Structure the content as if it were **a book chapter** rather than a casual conversation.
    - Keep the content **unique, engaging, and structured naturally.**
    
    ### Content Structure (Flexible Based on the Topic, No need to go with the exact headings/paragraphs)
    1. **Introduction**  
       - Briefly introduce the topic in a way that grabs attention.  
       - Mention why it's important and how it's used in real life.  
       - Add more information that you feel is good and that is being taught in real world educational platforms.
    
    2. **Core Concepts** (Modify this structure based on complexity)  
       - Use headings, bullet points, and explanations in a natural way.  
       - Include **examples, diagrams, or real-world cases**.  
       - If applicable, provide **step-by-step walkthroughs** (e.g., for coding topics).  
       - If historical, show **timelines or evolution**.  
    
    3. **Interactive Elements (Encourage User Engagement)**  
       - Pose a **thought-provoking question** or challenge.  
       - Suggest a **small hands-on activity** (e.g., writing code, researching a real case). 
       
    4. **Add more topics that you feel necessaary**
    
    5. **Summary & Next Steps**  
       - Recap the key takeaways in **a concise, bullet-point format**.  
       - Suggest how to apply the knowledge.  
    
    ---
    ⚡ **Customization Based on Topic**:  
    - If it's a **technical lesson**, include **code snippets, formulas, or visual diagrams**.  
    - If it's about **history or business**, use **storytelling or case studies**.  
    - If it's an **abstract concept**, use **analogies and everyday examples**.  
    ---
    
    💡 **Ensure the lesson is unique and engaging each time!**  
    - **Avoid starting every lesson the same way** – mix up introductions.  
    - Adjust **depth and details based on topic complexity**.  
    - Keep it **structured but dynamic** so it feels like a real instructor teaching naturally.  
    `;

    // Get the generative model
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // Generate content using the model
    const result = await model.generateContent(prompt);

    // Extract the generated content from the result
    const generatedContent = result.response.text();

    // Save the generated content to the UserLesson model
    userLesson.content = generatedContent;
    userLesson.isCompleted = false;
    await userLesson.save();

    return generatedContent; // Return the generated content
};
