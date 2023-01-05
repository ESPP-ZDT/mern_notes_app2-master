const express = require("express");
const { rateNote } = require("../controllers/notesControllers");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.put("/:id/rating", protect, rateNote);

module.exports = router;
