const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },

    title2: {
      type: String,
    },

    title3: {
      type: String,
    },

    endDate: {
      type: String,
    },

    startDate: {
      type: String,
    },

    description: {
      type: String,
    },

    country: {
      type: String,
    },

    picture: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Card", CardSchema);
