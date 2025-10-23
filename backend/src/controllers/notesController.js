

export const getAllNotes = async (req, res) => {
    res.status(200).send("you just fetched the notes");
}

export const createNote = async (req, res) => {
    res.status(201).json({ message: "Note created successfully" });
}

export const editNote = async (req, res) => {
    res.status(200).json({ message: "Note edited successfully" });
}

export const deleteNote = async (req, res) => {
    res.status(200).json({ message: "Note deleted successfully" });
}