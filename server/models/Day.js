// Day.js
const mongoose = require('mongoose');

const daySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // Add more fields as per your requirements
});

const Day = mongoose.model('Day', daySchema);

module.exports = Day;
