// Import required modules
const express = require('express');
const router = express.Router();
const Teacher = require('../models/Teacher');

// GET all teachers
router.get('/', async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET a specific teacher
router.get('/:id', async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    if (teacher) {
      res.json(teacher);
    } else {
      res.status(404).json({ message: 'Teacher not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new teacher
router.post('/', async (req, res) => {
  const { name, email } = req.body;

  try {
    const teacher = new Teacher({
      name,
      email,
    });

    const newTeacher = await teacher.save();
    res.status(201).json(newTeacher);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT (update) an existing teacher
router.put('/:id', async (req, res) => {
  const { name, email } = req.body;

  try {
    const teacher = await Teacher.findById(req.params.id);
    if (teacher) {
      teacher.name = name;
      teacher.email = email;

      const updatedTeacher = await teacher.save();
      res.json(updatedTeacher);
    } else {
      res.status(404).json({ message: 'Teacher not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE a teacher
router.delete('/:id', async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    if (teacher) {
      await teacher.deleteOne();
      res.json({ message: 'Teacher deleted' });
    } else {
      res.status(404).json({ message: 'Teacher not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
