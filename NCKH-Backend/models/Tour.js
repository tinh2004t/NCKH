const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  destinationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Destination', required: true },
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  duration: String,
  maxParticipants: Number,
  imageURL: String,
  isInternational: Boolean,
  createdAt: { type: Date, default: Date.now }
},{collection: 'Tours'});

module.exports = mongoose.model('Tour', tourSchema);
