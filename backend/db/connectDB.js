import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI;
        if (!uri) {
            throw new Error(
                "MONGO_URI is not defined in environment variables"
            );
        }
        const conn = await mongoose.connect(uri);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log("Error connecting to MongoDB: ", error.message);
        process.exit(1); // 1 is failure, 0 for success
    }
};
