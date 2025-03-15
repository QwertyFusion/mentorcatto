import express from "express";
import {
    markLessonComplete,
    getUserCompletedLessons,
    getUserLessonContent,
    createLessonContent,
} from "../controllers/lesson.controller.js";

const router = express.Router();

router.post("/complete", markLessonComplete);
router.get("/completed/:userId", getUserCompletedLessons);
router.get("/content/:userId/:lessonId", getUserLessonContent);
router.post("/create-content", createLessonContent);

export default router;
