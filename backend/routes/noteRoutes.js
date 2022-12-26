const express = require("express");
const { getUserNotes, createNote, getNoteById, updateNote, deleteNote } = require("../controllers/notesControllers");
const {protect} = require('../middlewares/authMiddleware')


const router = express.Router();

//router.route("/").get( getUserNotes);//usernotes??
router.route("/usernotes").get(protect, getUserNotes);//usernotes??
router.route("/create").post(protect, createNote);
router.route("/:id").get(protect,getNoteById).put(protect, updateNote).delete(protect,deleteNote);

module.exports = router;
