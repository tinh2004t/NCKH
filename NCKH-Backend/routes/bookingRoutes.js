const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const  verifyToken  = require('../middlewares/verifyToken');

router.post('/', bookingController.createBooking);

module.exports = router;
