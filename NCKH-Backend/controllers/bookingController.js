const Booking = require('../models/Booking');
const Tour = require('../models/Tour');
const Accommodation = require('../models/Accommodation');
const Flight = require('../models/Flight');

exports.createBooking = async (req, res) => {
    try {
      const {
        userId, // nếu là người đăng nhập
        customerName,
        customerEmail,
        customerPhone,
        tourId,
        accommodationId,
        flightId,
        numberOfPeople
      } = req.body;
  
      let totalPrice = 0;
  
      if (tourId) {
        const tour = await Tour.findById(tourId);
        if (!tour) return res.status(404).json({ message: 'Tour not found' });
        totalPrice += tour.price * numberOfPeople;
      }
  
      if (accommodationId) {
        const acc = await Accommodation.findById(accommodationId);
        if (!acc) return res.status(404).json({ message: 'Accommodation not found' });
        totalPrice += acc.pricePerNight * numberOfPeople;
      }
  
      if (flightId) {
        const flight = await Flight.findById(flightId);
        if (!flight) return res.status(404).json({ message: 'Flight not found' });
        totalPrice += flight.price * numberOfPeople;
      }
  
      const booking = new Booking({
        userId: userId || null,
        customerName,
        customerEmail,
        customerPhone,
        tourId,
        accommodationId,
        flightId,
        numberOfPeople,
        totalPrice
      });
  
      const saved = await booking.save();
      res.status(201).json(saved);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
