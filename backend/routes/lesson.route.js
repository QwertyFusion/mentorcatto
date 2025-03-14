import express from 'express';
import { markLessonComplete, getUserCompletedLessons } from '../controllers/lesson.controller.js';

const router = express.Router();

router.post('/complete', markLessonComplete);
router.get('/completed/:userId', getUserCompletedLessons);

export default router; 