const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const HomeWorkSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  owner: {
    type: Object,
    required: true
  },
  data: {
    type: Object,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = HomeWork = mongoose.model("homeworks", HomeWorkSchema);
