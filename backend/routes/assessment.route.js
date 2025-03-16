import express from "express";
import {
    markAssessmentComplete,
    getCompletedAssessments,
} from "../controllers/assessment.controller.js";

const router = express.Router();

// Route to mark an assessment as complete
router.post("/complete", markAssessmentComplete);

// Route to get completed assessments for a user
router.get("/completed/:userId", getCompletedAssessments);

export default router;
