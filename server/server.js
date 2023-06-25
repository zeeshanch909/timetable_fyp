// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const teacherRoutes = require('./Routes/teacherRoutes');
const subjectRoutes = require('./Routes/subjectRoutes');
const roomRoutes = require('./Routes/roomRoutes');
const timeSlotRoutes = require('./Routes/timeSlotRoutes');
const dayRoutes = require('./Routes/dayRoutes');
// Create an instance of Express
const app = express();

// Middleware
app.use(express.json()); // Parse JSON data in the request body
app.use(cors()); // Enable Cross-Origin Resource Sharing

// Set up your routes
app.use('/api/teachers', teacherRoutes); // Example route for teachers
app.use('/api/subjects', subjectRoutes); // Example route for subjects
app.use('/api/rooms', roomRoutes); // Example route for rooms
app.use('/api/timeSlots', timeSlotRoutes); // Example route for time slots
app.use('/api/days', dayRoutes); // Example route for time slots

// Define your MongoDB connection URL and options
const dbURI = 'mongodb://127.0.0.1:27017/timetable'; // Replace with your MongoDB URL
const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Connect to MongoDB
mongoose
  .connect(dbURI, dbOptions)
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server once connected to the database
    app.listen(8000, () => {
      console.log('Server started on port 8000');
    });
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });

// ...............................................................................


   