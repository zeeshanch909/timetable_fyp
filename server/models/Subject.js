// Subject.js
const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // Add more fields as per your requirements
});

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;
