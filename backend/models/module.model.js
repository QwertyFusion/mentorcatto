import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        lessons: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Lesson",
            },
        ],
    },
    { timestamps: true }
);

export const Module = mongoose.model("Module", moduleSchema);
