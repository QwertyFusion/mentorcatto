import express from "express";
import { connectDB } from "./db/connectDB.js";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.route.js";
import aiRoutes from "./routes/ai_agent.route.js";
import cookieParser from "cookie-parser";
import moduleRoutes from "./routes/module.route.js";
import lessonRoutes from './routes/lesson.route.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json()); // allows us to pass JSON payloads in incoming requests
app.use(cookieParser());

app.listen(port, () => {
    connectDB();
    console.log(
        `Server is running on port ${port}. Open at http://localhost:${port}`
    );
});

app.get("/", (req, res) => {
    res.send("MentorCatto is here!");
});

// Use the imported routes
app.use("/api/auth", authRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/modules", moduleRoutes);
app.use('/api/lessons', lessonRoutes);
