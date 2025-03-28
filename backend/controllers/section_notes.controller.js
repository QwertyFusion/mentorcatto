import { SectionNotes } from "../models/section_notes.model.js";

// Create or Update Section Notes
export const createOrUpdateSectionNotes = async (req, res) => {
    const { sections } = req.body;
    const userId = req.userId; // Get userId from the request

    try {
        const sectionNotes = await SectionNotes.findOneAndUpdate(
            { userId },
            { sections },
            { new: true, upsert: true }
        );
        res.status(200).json(sectionNotes);
    } catch (error) {
        console.error("Error saving sections:", error);
        res.status(500).json({ message: "Error saving sections", error });
    }
};

// Get Setions
export const getSectionNotes = async (req, res) => {
    const userId = req.userId; // Get userId from the request

    try {
        const sectionNotes = await SectionNotes.findOne({ userId });
        res.status(200).json(sectionNotes || { sections: [] });
    } catch (error) {
        console.error("Error fetching sections:", error);
        res.status(500).json({ message: "Error fetching sections", error });
    }
};
