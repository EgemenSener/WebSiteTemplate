const mongoose = require("mongoose");
const Card = require("./Card").schema;

const PersonSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },

    name: {
      type: String,
    },

    surname: {
      type: String,
    },

    email: {
      type: String,
    },

    bornDate: {
      type: String,
    },

    profilePhoto: {
      type: String,
    },

    city: {
      type: String,
      max: 50,
    },
    from: {
      type: String,
      max: 50,
    },

    Pictures: {
      type: Array,
      default: [],
    },

    description: {
      type: String,
    },

    skills: {
      type: Array,
    },

    education: { Card },

    experience: [Card],

    certificates: [Card],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Person", PersonSchema);
