const express = require('express');
const router = express.Router();
const destinationController = require('../controllers/destinationController');
const  verifyToken  = require('../middlewares/verifyToken');
const { checkAdminRole } = require('../middlewares/checkRole');

router.get('/', destinationController.getAllDestinations);
router.get('/:id', destinationController.getDestinationById);
router.post('/', verifyToken,checkAdminRole, destinationController.createDestination);
router.put('/:id', verifyToken,checkAdminRole, destinationController.updateDestination);
router.delete('/:id', verifyToken,checkAdminRole, destinationController.deleteDestination);

module.exports = router;
