import mongoose from "mongoose";

const userModuleSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        module: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Module",
            required: true,
        },
        isCompleted: {
            type: Boolean,
            default: false,
        },
        completedAt: {
            type: Date,
        },
    },
    { timestamps: true }
);

export const UserModule = mongoose.model("UserModule", userModuleSchema); 