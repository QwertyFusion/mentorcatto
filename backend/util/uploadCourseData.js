import mongoose from "mongoose";
import dotenv from "dotenv";
import courseData from "../../frontend/src/store/CourseDataStore.js";
import { Module } from "../models/module.model.js";
import { Lesson } from "../models/lesson.model.js";

dotenv.config(); // Load environment variables (MongoDB URI)

const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected...");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
        process.exit(1);
    }
};

const uploadData = async () => {
    try {
        await connectDB();

        // Clear existing data (optional)
        await Module.deleteMany();
        await Lesson.deleteMany();
        console.log("Cleared existing course data.");

        for (const moduleItem of courseData) {
            const newModule = new Module({
                name: moduleItem.moduleName,
            });

            const savedModule = await newModule.save();
            console.log(`Module added: ${savedModule.name}`);

            const lessonIds = [];

            for (const lessonName of moduleItem.lessons) {
                const newLesson = new Lesson({
                    name: lessonName,
                    number: moduleItem.lessons.indexOf(lessonName) + 1,
                    module: savedModule._id,
                });

                const savedLesson = await newLesson.save();
                lessonIds.push(savedLesson._id);
                console.log(`Lesson added: ${savedLesson.name}`);
            }

            // Update module with lesson IDs
            savedModule.lessons = lessonIds;
            await savedModule.save();
        }

        console.log("✅ Course data uploaded successfully!");
        process.exit(); // Exit the process after completion
    } catch (error) {
        console.error("Error uploading course data:", error);
        process.exit(1);
    }
};

// Run the script
uploadData();
