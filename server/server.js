const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const registerRoute = require('../routes/register');
require('dotenv').config();
const serverless = require('serverless-http');

const app = express();

// CORS middleware
app.use(cors({
  origin: "https://arduinoworkshop-4o78.vercel.app",
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// Routes
app.use('/api/register', registerRoute);

app.get('/api', (req, res) => {
  res.send({
    activeStatus: true,
    error: false,
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ message: 'Internal server error' });
});

// MongoDB connect on demand
let isConnected = false;

async function connectDB() {
  if (isConnected) return;
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
    isConnected = true;
  } catch (err) {
    console.error('MongoDB connection error:', err);
    throw err;
  }
}

// Wrap with serverless handler
module.exports = async (req, res) => {
  await connectDB();
  const handler = serverless(app);
  return handler(req, res);
};
