import mongoose from "mongoose";
import { connectDB } from "../db/connectDB.js";
import achievement from "../models/achievements.model.js";

const addNewDocument = async () => {
    try {
        await connectDB(); // Connect to MongoDB
        await achievement.create({
            title: "Getting Started",
            subtitle: "Login for the first time",
            icon: "",
        });
        await achievement.create({
            title: "Medieval Knight",
            subtitle: "Complete five assessments",
            icon: "",
        });
        await achievement.create({
            title: "A friend in need",
            subtitle: "Take help from Agent while practicing",
            icon: "",
        });
        await achievement.create({
            title: "Found'em all!",
            subtitle: "Navigate through all the pages",
            icon: "",
        });
        await achievement.create({
            title: "Crowned them all!",
            subtitle: "Practice 200 questions",
            icon: "",
        });
        await achievement.create({
            title: "See you later!",
            subtitle: "Change your preferred language",
            icon: "",
        });
        await achievement.create({
            title: "Novice",
            subtitle: "Complete your very first assessment",
            icon: "",
        });
        await achievement.create({
            title: "Where's the carrot?",
            subtitle: "Practice your first five questions",
            icon: "",
        });
        await achievement.create({
            title: "Wizard",
            subtitle: "Score above 80%",
            icon: "",
        });
        await achievement.create({
            title: "Aim Bot",
            subtitle: "Score 100% in 3 consecutive modules",
            icon: "",
        });
        await achievement.create({
            title: "Perfectionist",
            subtitle: "Complete all the modules",
            icon: "",
        });
        await achievement.create({
            title: "John Doe",
            subtitle: "Score 100% in all modules",
            icon: "",
        });
        await achievement.create({
            title: "John Doe",
            subtitle: "abc",
            icon: "",
        });
        await achievement.create({
            title: "John Doe",
            subtitle: "abc",
            icon: "",
        });
        await achievement.create({
            title: "John Doe",
            subtitle: "abc",
            icon: "",
        });
        await achievement.create({
            title: "John Doe",
            subtitle: "abc",
            icon: "",
        });
        await achievement.create({
            title: "John Doe",
            subtitle: "abc",
            icon: "",
        });
        await achievement.create({
            title: "John Doe",
            subtitle: "abc",
            icon: "",
        });
        await achievement.create({
            title: "John Doe",
            subtitle: "abc",
            icon: "",
        });
        await achievement.create({
            title: "John Doe",
            subtitle: "abc",
            icon: "",
        });
        await achievement.create({
            title: "John Doe",
            subtitle: "abc",
            icon: "",
        });
        await achievement.create({
            title: "John Doe",
            subtitle: "abc",
            icon: "",
        });
        await achievement.create({
            title: "John Doe",
            subtitle: "abc",
            icon: "",
        });
        await achievement.create({
            title: "John Doe",
            subtitle: "abc",
            icon: "",
        });
        await achievement.create({
            title: "John Doe",
            subtitle: "abc",
            icon: "",
        });
        console.log("New document added!");
    } catch (error) {
        console.error("Error adding document:", error);
    } finally {
        mongoose.connection.close(); // Close DB connection
    }
};

addNewDocument();
