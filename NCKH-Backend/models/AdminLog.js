const mongoose = require('mongoose');

const adminLogSchema = new mongoose.Schema({
  adminId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  action: { type: String, required: true },
  actionDate: { type: Date, default: Date.now }
}, { collection: 'AdminLogs' });

module.exports = mongoose.model('AdminLog', adminLogSchema);
