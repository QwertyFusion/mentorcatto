import mongoose from "mongoose";

const sectionNotesSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User ",
            required: true,
        },
        sections: [
            {
                name: {
                    type: String,
                    required: true,
                },
                texts: [
                    {
                        content: String,
                        createdAt: {
                            type: Date,
                            default: Date.now,
                        },
                    },
                ],
            },
        ],
    },
    { timestamps: true }
);

export const SectionNotes = mongoose.model("SectionNotes", sectionNotesSchema);
