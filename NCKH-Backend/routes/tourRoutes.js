const express = require('express');
const router = express.Router();
const tourController = require('../controllers/tourController');
const  verifyToken  = require('../middlewares/verifyToken');
const { checkAdminRole } = require('../middlewares/checkRole');

router.get('/', tourController.getAllTours);
router.get('/:id', tourController.getTourById);
router.post('/', verifyToken,checkAdminRole, tourController.createTour);
router.put('/:id', verifyToken,checkAdminRole, tourController.updateTour);
router.delete('/:id', verifyToken,checkAdminRole, tourController.deleteTour);

module.exports = router;
