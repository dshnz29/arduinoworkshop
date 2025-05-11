const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Registration = sequelize.define('Registration', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: false },
  institute: { type: DataTypes.STRING, allowNull: false },
  experienceLevel: {
    type: DataTypes.ENUM('beginner', 'intermediate', 'advanced'),
    defaultValue: 'beginner',
  },
}, {
  timestamps: true,
  indexes: [
    {
      unique: true,
      fields: ['email', 'phone', 'institute']
    }
  ]
});

module.exports = Registration;
