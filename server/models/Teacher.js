// Import required modules
const mongoose = require('mongoose');

// Define the schema for Teacher collection
const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  // Add more fields as per your requirements
});

// Create the Teacher model from the schema
const Teacher = mongoose.model('Teacher', teacherSchema);

// Export the Teacher model
module.exports = Teacher;
