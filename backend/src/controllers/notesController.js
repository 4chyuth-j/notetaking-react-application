import Note from "../models/Note.js";

export const getAllNotes = async (_, res) => {
    try {
        const notes = await Note.find().sort({createdAt:-1});
        res.status(200).json(notes);
    } catch (error) {
        console.error("error in getting all notes controller", error);
        res.status(500).json({ message: "internal server error" });
    }
}

export const getNoteById = async(req,res)=>{
    try {
        const id = req.params.id;
        const selectedNote = await Note.findById(id);
        if(!selectedNote){
            return res.status(404).json({message:"Note doesn't exist"});
        }
        res.status(200).json(selectedNote);
    } catch (error) {
        console.error("error in finding note by id controller", error);
        res.status(500).json({ message: "internal server error" });
    }
}

export const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newNote = new Note({ title, content });

        const savedNote = await newNote.save();

        res.status(201).json(savedNote);
    } catch (error) {
        console.error("error in creating notes controller", error);
        res.status(500).json({ message: "internal server error" });
    }
}

export const editNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const id = req.params.id;
        const updatedNote = await Note.findByIdAndUpdate(id, { title, content },{new:true})
        if(!updatedNote){
            return res.status(404).json({message:"Note doesn't exist"});
        }
        res.status(200).json(updatedNote);
    } catch (error) {
        console.error("error in editing the notes controller", error);
        res.status(500).json({ message: "internal server error" });
    }
}

export const deleteNote = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedNote =  await Note.findByIdAndDelete(id);
        if(!deletedNote){
            return res.status(404).json({message:"Note doesn't exist"});
        }
        res.status(200).json({ message: "Note deleted successfully" });
    } catch (error) {
        console.error("error in deleting the notes controller", error);
        res.status(500).json({ message: "internal server error" });
    }
}