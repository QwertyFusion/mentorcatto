import express from "express";
import { getQuestions } from "../controllers/question.controller.js";

const router = express.Router();

router.get("/", getQuestions);

export default router;
