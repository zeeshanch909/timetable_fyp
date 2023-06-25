// Import required modules
const express = require('express');
const router = express.Router();
const Room = require('../models/Room');

// GET all rooms
router.get('/', async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET a specific room
router.get('/:id', async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (room) {
      res.json(room);
    } else {
      res.status(404).json({ message: 'Room not found' });
    }
  } catch (error) {
    
    res.status(500).json({ message: error.message });
  }
});

// POST a new room
router.post('/', async (req, res) => {
  const room = new Room({
    number: req.body.number,
    // Add more fields as per your requirements
  });

  try {
    const newRoom = await room.save();
    res.status(201).json(newRoom);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT (update) an existing room
router.put('/:id', async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (room) {
      room.number = req.body.number;
      // Update other fields as per your requirements

      const updatedRoom = await room.save();
      res.json(updatedRoom);
    } else {
      res.status(404).json({ message: 'Room not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE a room
router.delete('/:id', async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (room) {
      await room.deleteOne();
      res.json({ message: 'Room deleted' });
    } else {
      res.status(404).json({ message: 'Room not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
