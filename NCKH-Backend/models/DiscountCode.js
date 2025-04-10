const mongoose = require('mongoose');

const discountCodeSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  discountPercentage: { type: Number, required: true },
  maxUsage: { type: Number, required: true },
  usageCount: { type: Number, default: 0 },
  expiryDate: { type: Date, required: true },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
}, { collection: 'DiscountCodes' });

module.exports = mongoose.model('DiscountCode', discountCodeSchema);
