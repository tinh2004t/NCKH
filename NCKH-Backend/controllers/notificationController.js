const Notification = require('../models/Notification');
const logAdminAction = require('../utils/logAdminAction');


exports.createNotification = async (req, res) => {
  try {
    const { title, message } = req.body;
    const noti = new Notification({ title, message });
    const saved = await noti.save();
    res.status(201).json(saved);
    await logAdminAction(req.user._id, `Tạo thông báo: ${title}`);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find().sort({ createdAt: -1 });
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
