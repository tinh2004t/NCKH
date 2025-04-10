const Review = require('../models/Review');
const Booking = require('../models/Booking');

exports.createReview = async (req, res) => {
  try {
    const { userId, bookingId, rating, comment } = req.body;

    const booking = await Booking.findById(bookingId);
    if (!booking || booking.userId?.toString() !== userId) {
      return res.status(400).json({ message: 'Bạn chưa từng đặt tour này.' });
    }

    const review = new Review({ userId, bookingId, rating, comment });
    const saved = await review.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
