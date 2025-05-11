require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const registerRoute = require('./routes/register');
const Registration = require('./models/Registration'); // Ensure model is loaded

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// Routes
app.use('/api/register', registerRoute);

// Error handling
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ message: 'Internal server error' });
});

// Sync DB and start server
const start = async () => {
  try {
    await sequelize.authenticate();
    console.log('MySQL connected');

    await sequelize.sync(); // Creates tables if not exist

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error('MySQL connection error:', err);
    process.exit(1);
  }
};

start();
