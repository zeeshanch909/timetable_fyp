// Import required modules
const express = require('express');
const router = express.Router();
const Day = require('../models/Day');

// Salam Zeeshan

// GET all days
router.get('/', async (req, res) => {
  try {
    const days = await Day.find();
    res.json(days);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET a specific day
router.get('/:id', async (req, res) => {
  try {
    const day = await Day.findById(req.params.id);
    if (day) {
      res.json(day);
    } else {
      res.status(404).json({ message: 'Day not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new day
router.post('/', async (req, res) => {
  const day = new Day({
    name: req.body.name,
    // Add more fields as per your requirements
  });

  try {
    const newDay = await day.save();
    res.status(201).json(newDay);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT (update) an existing day
router.put('/:id', async (req, res) => {
  try {
    const day = await Day.findById(req.params.id);
    if (day) {
      day.name = req.body.name;
      // Update other fields as per your requirements

      const updatedDay = await day.save();
      res.json(updatedDay);
    } else {
      res.status(404).json({ message: 'Day not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE a day
router.delete('/:id', async (req, res) => {
  try {
    const day = await Day.findById(req.params.id);
    if (day) {
      await day.deleteOne();
      res.json({ message: 'Day deleted' });
    } else {
      res.status(404).json({ message: 'Day not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
