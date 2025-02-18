import express from "express";
import { aiagent } from "../controllers/ai_agent.controller.js";
const router = express.Router();

router.post("/ai-agent", aiagent);

export default router;
