const express = require('express');
const router = express.Router();
const accController = require('../controllers/accommodationController');
const  verifyToken  = require('../middlewares/verifyToken');
const { checkAdminRole } = require('../middlewares/checkRole');

router.get('/', accController.getAllAccommodations);
router.get('/:id', accController.getAccommodationById);
router.post('/', verifyToken,checkAdminRole, accController.createAccommodation);
router.put('/:id', verifyToken,checkAdminRole, accController.updateAccommodation);
router.delete('/:id', verifyToken,checkAdminRole, accController.deleteAccommodation);

module.exports = router;
