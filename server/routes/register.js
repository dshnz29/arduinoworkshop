const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');

router.post('/', async (req, res) => {
  const { name, email, phone, institute, experienceLevel } = req.body;

  if (!name || !email || !phone || !institute) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const existing = await Registration.findOne({
      where: { email, phone, institute }
    });

    if (existing) {
      return res.status(409).json({ message: 'You have already registered with these details.' });
    }

    const newRegistration = await Registration.create({
      name,
      email,
      phone,
      institute,
      experienceLevel
    });

    res.status(201).json({
      message: 'Registration successful!',
      registration: newRegistration
    });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({
      message: 'Server error. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

module.exports = router;
