const mongoose = require("mongoose");

const noteSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    likes: [{ type: mongoose.Types.ObjectId, ref: "User" }],
    rating: {
      type: Number,
      default: 0,
    },
    meanRating: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
