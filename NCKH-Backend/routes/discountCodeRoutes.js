const express = require('express');
const router = express.Router();
const discountCodeController = require('../controllers/discountCodeController');
const { checkAdminRole } = require('../middlewares/checkRole');
const verifyToken = require('../middlewares/verifyToken');

router.post('/', verifyToken,checkAdminRole, discountCodeController.createDiscountCode);       // Admin tạo mã
router.post('/apply', discountCodeController.applyDiscountCode);  // Người dùng áp mã

module.exports = router;
