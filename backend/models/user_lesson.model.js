import mongoose from "mongoose";

const userLessonSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        lesson: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Lesson",
            required: true,
        },
        content: {
            type: String, // Generated dynamically based on user preferences
            default: "",
        },
        isCompleted: {
            type: Boolean,
            default: false,
        },
        completedAt: {
            type: Date,
        }, // Optional: Store completion timestamp
    },
    { timestamps: true }
);

export const UserLesson = mongoose.model("UserLesson", userLessonSchema);
