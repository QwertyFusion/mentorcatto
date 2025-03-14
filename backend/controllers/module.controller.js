import { Module } from "../models/module.model.js";
import { Lesson } from "../models/lesson.model.js";

export const getAllModulesWithLessons = async (req, res) => {
    try {
        const modules = await Module.find()
            .populate({
                path: 'lessons',
                model: 'Lesson',
                select: 'name number'
            })
            .sort({ 'lessons.number': 1 });

        res.status(200).json(modules);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}; 