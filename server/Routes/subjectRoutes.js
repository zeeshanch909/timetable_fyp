// Import required modules
const express = require('express');
const router = express.Router();
const Subject = require('../models/Subject');

// GET all subjects
router.get('/', async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.json(subjects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET a specific subject
router.get('/:id', async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id);
    if (subject) {
      res.json(subject);
    } else {
      res.status(404).json({ message: 'Subject not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new subject
router.post('/', async (req, res) => {
  const subject = new Subject({
    name: req.body.name,
    // Add more fields as per your requirements
  });

  try {
    const newSubject = await subject.save();
    res.status(201).json(newSubject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT (update) an existing subject
router.put('/:id', async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id);
    if (subject) {
      subject.name = req.body.name;
      // Update other fields as per your requirements

      const updatedSubject = await subject.save();
      res.json(updatedSubject);
    } else {
      res.status(404).json({ message: 'Subject not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE a subject
router.delete('/:id', async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id);
    if (subject) {
      await subject.deleteOne();
      res.json({ message: 'Subject deleted' });
    } else {
      res.status(404).json({ message: 'Subject not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
