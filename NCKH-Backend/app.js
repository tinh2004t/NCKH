const express = require('express');
const app = express();
require('dotenv').config();

const authRoutes = require('./routes/auth');
const destinationRoutes = require('./routes/destinationRoutes');
const verifyToken = require('./middlewares/verifyToken');
const tourRoutes = require('./routes/tourRoutes');
const accommodationRoutes = require('./routes/accommodationRoutes');
const flightRoutes = require('./routes/flightRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const discountRoutes = require('./routes/discountCodeRoutes');
const adminLogRoutes = require('./routes/adminLogRoutes');



// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/destinations', destinationRoutes);
app.use('/api/tours', tourRoutes);
app.use('/api/accommodations', accommodationRoutes);
app.use('/api/flights', flightRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/discount-codes', discountRoutes);
app.use('/api/admin-logs', adminLogRoutes);


// Route thử nghiệm với JWT
app.get('/api/protected', verifyToken, (req, res) => {
  res.json({ message: 'You are authorized', user: req.user });
});

module.exports = app;
