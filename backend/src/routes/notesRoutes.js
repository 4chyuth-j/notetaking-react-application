import express from "express";
import { getAllNotes, createNote, editNote, deleteNote,getNoteById } from "../controllers/notesController.js";
const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", editNote);
router.delete("/:id", deleteNote);

export default router;