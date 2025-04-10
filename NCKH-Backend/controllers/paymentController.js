const Booking = require('../models/Booking');
const Payment = require('../models/Payment');
const generateCode = require('../utils/generateCode'); // Hàm random code

exports.createPayment = async (req, res) => {
  try {
    const { bookingId } = req.body;

    const booking = await Booking.findById(bookingId);
if (!booking) return res.status(404).json({ message: 'Booking not found' });

// Kiểm tra xem booking có đủ thông tin không
if (!booking.numberOfPeople || !booking.totalPrice) {
  return res.status(400).json({ message: 'Booking data invalid: missing numberOfPeople or totalPrice' });
}

    // Tạo transaction code
    const transactionCode = generateCode(); // Ví dụ: ABCD1234

    const payment = new Payment({
      userId: booking.userId || null,
      bookingId: booking._id,
      totalPrice: booking.totalPrice,
      transactionCode,
      paymentStatus: 'Completed'
    });

    const saved = await payment.save();

    // Cập nhật trạng thái thanh toán trong Booking
    booking.paymentStatus = 'Completed';
    await booking.save();

    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
