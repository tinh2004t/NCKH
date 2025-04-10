const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
    bookingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', required: true },
    paymentDate: { type: Date, default: Date.now },
    totalPrice: { type: Number, required: true },
    paymentStatus: { type: String, enum: ['Pending', 'Completed', 'Failed'], default: 'Completed' },
    transactionCode: { type: String, unique: true }
  },{collection: 'Payments'});
  
  module.exports = mongoose.model('Payment', paymentSchema);
  