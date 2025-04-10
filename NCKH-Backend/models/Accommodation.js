const mongoose = require('mongoose');

const accommodationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ['Hotel', 'Villa', 'Homestay', 'BudgetHotel'], required: true },
  location: { type: String, required: true },
  description: String,
  pricePerNight: { type: Number, required: true },
  rating: Number,
  imageURL: String,
  createdAt: { type: Date, default: Date.now }
},{collection: 'Accommodations'});

module.exports = mongoose.model('Accommodation', accommodationSchema);
