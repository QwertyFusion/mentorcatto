import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        number: {
            type: Number,
            required: true,
        },
        module: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Module",
            required: true,
        },
    },
    { timestamps: true }
);

export const Lesson = mongoose.model("Lesson", lessonSchema);
