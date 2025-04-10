const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
  customerName: { type: String },
  customerEmail: { type: String },
  customerPhone: { type: String },
  tourId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tour' },
  accommodationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Accommodation' },
  flightId: { type: mongoose.Schema.Types.ObjectId, ref: 'Flight' },
  bookingDate: { type: Date, default: Date.now },
  numberOfPeople: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  paymentStatus: { type: String, enum: ['Pending', 'Completed', 'Cancelled'], default: 'Pending' }
}, { collection: 'Bookings' });

module.exports = mongoose.model('Booking', bookingSchema);
