const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');
const verifyToken = require('../middlewares/verifyToken');
const { checkAdminRole } = require('../middlewares/checkRole');

router.post('/',verifyToken,checkAdminRole ,notificationController.createNotification);
router.get('/', notificationController.getAllNotifications);

module.exports = router;
