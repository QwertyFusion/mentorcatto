import express from "express";
import { connectDB } from "./db/connectDB.js";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.route.js";
import aiRoutes from "./routes/ai_agent.route.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json()); // allows us to pass jason payloades os incomming requests
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

app.use("/api/auth", authRoutes);

app.use("/api/ai", aiRoutes);
