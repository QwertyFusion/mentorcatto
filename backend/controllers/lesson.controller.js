import { GoogleGenerativeAI } from "@google/generative-ai";
import { UserLesson } from "../models/user_lesson.model.js";
import { Lesson } from "../models/lesson.model.js";
import { generateLessonContent } from "../util/lessonContentGenerator.js";

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
