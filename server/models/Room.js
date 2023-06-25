// Room.js
const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  number: {
    type: String,
    required: true,
  },
  // Add more fields as per your requirements
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
