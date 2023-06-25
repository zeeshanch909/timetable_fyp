// Import required modules
const express = require('express');
const router = express.Router();
const TimeSlot = require('../models/TimeSlot');

// GET all time slots
router.get('/', async (req, res) => {
  try {
    const timeSlots = await TimeSlot.find();
    res.json(timeSlots);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET a specific time slot
router.get('/:id', async (req, res) => {
  try {
    const timeSlot = await TimeSlot.findById(req.params.id);
    if (timeSlot) {
      res.json(timeSlot);
    } else {
      res.status(404).json({ message: 'Time slot not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new time slot
router.post('/', async (req, res) => {
  const timeSlot = new TimeSlot({
    slotNumber: req.body.slotNumber,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    // Add more fields as per your requirements
  });

  try {
    const newTimeSlot = await timeSlot.save();
    res.status(201).json(newTimeSlot);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT (update) an existing time slot
router.put('/:id', async (req, res) => {
  try {
    const timeSlot = await TimeSlot.findById(req.params.id);
    if (timeSlot) {
      timeSlot.slotNumber = req.body.slotNumber;
      timeSlot.startTime = req.body.startTime;
      timeSlot.endTime = req.body.endTime;
      // Update other fields as per your requirements

      const updatedTimeSlot = await timeSlot.save();
      res.json(updatedTimeSlot);
    } else
 {
    res.status(404).json({ message: 'Time slot not found' });
  }
} catch (error) {
  res.status(400).json({ message: error.message });
}
});

// DELETE a time slot
router.delete('/:id', async (req, res) => {
  try {
    const timeSlot = await TimeSlot.findById(req.params.id);
    if (timeSlot) {
      await timeSlot.deleteOne();
      res.json({ message: 'Time slot deleted' });
    } else {
      res.status(404).json({ message: 'Time slot not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

