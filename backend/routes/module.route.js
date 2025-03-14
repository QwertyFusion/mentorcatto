import express from 'express';
import { getAllModulesWithLessons } from '../controllers/module.controller.js';

const router = express.Router();

router.get('/', getAllModulesWithLessons);

export default router; 