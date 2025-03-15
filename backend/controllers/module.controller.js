import { Module } from "../models/module.model.js";
import { Lesson } from "../models/lesson.model.js";

export const getAllModulesWithLessons = async (req, res) => {
    try {
        // Fetch modules and sort by moduleNumber
        const modules = await Module.find()
            .populate({
                path: "lessons",
                model: "Lesson",
                select: "name number",
                options: { sort: { number: 1 } }, // Sort lessons by their number
            })
            .sort({ moduleNumber: 1 }); // Sort modules by moduleNumber

        res.status(200).json(modules);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
