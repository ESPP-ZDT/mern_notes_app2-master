const express = require("express");
const { getUserNotes, createNote, getNoteById, updateNote, deleteNote, getNotes } = require("../controllers/notesControllers");
const {protect} = require('../middlewares/authMiddleware')


const router = express.Router();

router.route("/").get(getNotes);//usernotes??
router.route("/usernotes").get(protect,getUserNotes);//usernotes??
router.route("/create").post(protect, createNote);
router.route("/:id").get(protect,getNoteById).put(protect, updateNote).delete(protect,deleteNote);


router.put("/:id/like",protect, async (req, res) => {
    try {
      const noteId = req.params.id;
      const note = await Note.findById(noteId);
      if (!note) return res.status(404).send("Note not found");
  
      const userId = req.body.userId;
      if (note.likes.includes(userId)) {
        // If the user has already liked the note, remove their ObjectId from the likes array
        note.likes = note.likes.filter((like) => like.toString() !== userId);
      } else {
        // If the user has not liked the note, add their ObjectId to the likes array
        note.likes.push(userId);
      }
  
      await note.save();
      res.send(note);
    } catch (error) {
      res.status(400).send(error.message);
    }
  });
  


module.exports = router;
