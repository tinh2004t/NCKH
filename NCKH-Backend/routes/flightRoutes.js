const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flightController');
const  verifyToken  = require('../middlewares/verifyToken');
const { checkAdminRole } = require('../middlewares/checkRole');

router.get('/', flightController.getAllFlights);
router.get('/:id', flightController.getFlightById);
router.post('/', verifyToken,checkAdminRole, flightController.createFlight);
router.put('/:id', verifyToken,checkAdminRole, flightController.updateFlight);
router.delete('/:id', verifyToken,checkAdminRole, flightController.deleteFlight);

module.exports = router;
