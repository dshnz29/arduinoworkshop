const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  institute: { type: String, required: true },
  experienceLevel: { type: String, enum: ['beginner', 'intermediate', 'advanced'], default: 'beginner' },
}, { timestamps: true });

registrationSchema.index({ email: 1, phone: 1, institute: 1 }, { unique: true });

module.exports = mongoose.model('Registration', registrationSchema);
