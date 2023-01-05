const mongoose = require("mongoose");


// Load the Rating and Note models
const Rating = require("../models/ratingsModel");
const Note = require("../models/noteModel");

const asyncHandler = require("express-async-handler");

const rateNote = asyncHandler(async (req, res) => {
    try {
      const noteId = req.params.id;
      const { userId, rating } = req.body;
      // Find the note being rated
      const note = await Note.findById(noteId);
      if (!note) return res.status(404).send("Note not found");
  
      // Create a new rating document
      const newRating = new Rating({ noteId, userId, rating });
      await newRating.save();
  
      // Update the rating and meanRating fields of the note document
      note.rating += rating;
      note.meanRating = note.rating / note.ratings.length;
      await note.save();
  
      res.send(note);
    } catch (error) {
      res.status(400).send(error.message);
    }
  });
  
module.exports = { rateNote };
