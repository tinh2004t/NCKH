const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  title: String,
  message: String,
  isRead: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
}, { collection: 'Notifications' });

module.exports = mongoose.model('Notification', notificationSchema);
