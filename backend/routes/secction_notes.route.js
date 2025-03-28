import express from "express";
import {
    createOrUpdateSectionNotes,
    getSectionNotes,
} from "../controllers/section_notes.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

// Routes
router.post("/", verifyToken, createOrUpdateSectionNotes);
router.get("/", verifyToken, getSectionNotes);

export default router;
