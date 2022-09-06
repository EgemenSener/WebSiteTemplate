const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },

    title2: {
      type: String,
    },

    time: {
      type: String,
    },

    description: {
      type: String,
    },

    picture: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Card", CardSchema);
