const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: String,
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  phoneNumber: String,
  role: { type: String, enum: ['User', 'Admin'], default: 'User' },
  dateJoined: { type: Date, default: Date.now },
  lastLogin: Date
},{ collection: 'Users' });

module.exports = mongoose.model('User', userSchema);
