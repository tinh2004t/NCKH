const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  airline: { type: String, required: true },
  departureLocation: { type: String, required: true },
  arrivalLocation: { type: String, required: true },
  departureTime: { type: Date, required: true },
  arrivalTime: { type: Date, required: true },
  price: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
},{collection: 'Flights'});

module.exports = mongoose.model('Flight', flightSchema);
