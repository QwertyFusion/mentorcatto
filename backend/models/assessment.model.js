import mongoose from "mongoose";

const assessmentSchema = new mongoose.Schema(
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
        completedAt: {
            type: Date,
            default: Date.now,
        },
        highestMarks: {
            type: Number,
            required: true, // Assuming you want to make this field required
        },
        pass: {
            type: Boolean,
            default: false, // Default to false, indicating the user has not passed
        },
    },
    {
        timestamps: true,
    }
);

// Create a compound unique index on user and module
assessmentSchema.index({ user: 1, module: 1 }, { unique: true });

const Assessment = mongoose.model("Assessment", assessmentSchema);

export default Assessment;
