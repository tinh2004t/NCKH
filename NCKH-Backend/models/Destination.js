const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  location: String,
  imageURL: String,
  popularityScore: Number,
  createdAt: { type: Date, default: Date.now }
},{ collection: 'Destinations' });

module.exports = mongoose.model('Destination', destinationSchema);
