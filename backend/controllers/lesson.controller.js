import { UserLesson } from "../models/user_lesson.model.js";

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

        const userLesson = await UserLesson.findOne({
            user: userId,
            lesson: lessonId,
        });

        if (!userLesson) {
            return res.status(404).json({ message: "Lesson not found" });
        }

        res.status(200).json(userLesson);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createLessonContent = async (req, res) => {
    try {
        const { userId, lessonId, preferredLanguage, additionalInstructions } =
            req.body;

        // Here you would implement the logic to generate content based on the user's preferences.
        // For now, let's assume we generate some dummy content.
        const generatedContent = `Generated content for lesson ${lessonId} in ${preferredLanguage}.`;

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
        res.status(500).json({ error: error.message });
    }
};
