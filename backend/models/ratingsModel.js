const mongoose = require("mongoose");

const ratingSchema = mongoose.Schema({
  noteId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Note",
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  rating: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

const Rating = mongoose.model("Rating", ratingSchema);

module.exports = Rating;