import { GoogleGenerativeAI } from "@google/generative-ai";
import { UserLesson } from "../models/user_lesson.model.js";
import { Lesson } from "../models/lesson.model.js";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const markLessonComplete = async (req, res) => {
    try {
        const { userId, lessonId } = req.body;

        let userLesson = await UserLesson.findOne({
            user: userId,
            lesson: lessonId,
        });

        if (userLesson) {
            userLesson.isCompleted = true;
            userLesson.completedAt = new Date();
        } else {
            userLesson = new UserLesson({
                user: userId,
                lesson: lessonId,
                isCompleted: true,
                completedAt: new Date(),
            });
        }

        await userLesson.save();

        res.status(200).json({ message: "Lesson marked as complete" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getUserCompletedLessons = async (req, res) => {
    try {
        const userId = req.params.userId;
        const completedLessons = await UserLesson.find({
            user: userId,
            isCompleted: true,
        }).populate("lesson");

        res.status(200).json(completedLessons);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getUserLessonContent = async (req, res) => {
    try {
        const { userId, lessonId } = req.params;

        let userLesson = await UserLesson.findOne({
            user: userId,
            lesson: lessonId,
        });

        // If no user lesson is found, create one with empty content
        if (!userLesson) {
            userLesson = new UserLesson({
                user: userId,
                lesson: lessonId,
                content: "",
                isCompleted: false, // Default to not completed
            });
            await userLesson.save();
        }

        res.status(200).json(userLesson); // Return the user lesson (either found or newly created)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createLessonContent = async (req, res) => {
    try {
        const { userId, lessonId, preferredLanguage, additionalInstructions } =
            req.body;

        let lesson = await Lesson.findById(lessonId);

        if (!lesson) {
            return res.status(404).json({ message: "Lesson not found" });
        }

        // Prepare the prompt for the AI model
        const prompt = `You are a professional educator creating an engaging, structured lesson for an online DSA learning platform.  
Generate a **high-quality lesson** on the topic **"${lesson.name}"** in **${preferredLanguage}**.  

### Important Guidelines:
- The lesson should feel like a **teacher is explaining the topic** naturally.
- **Dynamically decide** how to introduce the topic:  
  - Start with a real-world scenario, a question, an interesting fact, or a common misconception.  
- Ensure the lesson **varies its structure** depending on the topic.  
- Do not say stuff like normal conversation, just create couse content as if it is in a book. Also no need to mention the title of the lesson at the top.
- Do not forget to use markdown effectively to make sure that the content is very readable. Do not feel restricted to use #, ## or ###. Everything is allowed for markdown format.
- Additional Instructions from user side: **${additionalInstructions}**.

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
        let userLesson = await UserLesson.findOne({
            user: userId,
            lesson: lessonId,
        });
        if (userLesson) {
            userLesson.content = generatedContent;
        } else {
            userLesson = new UserLesson({
                user: userId,
                lesson: lessonId,
                content: generatedContent,
                isCompleted: false,
            });
        }

        await userLesson.save();

        res.status(200).json({ content: generatedContent });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
};
