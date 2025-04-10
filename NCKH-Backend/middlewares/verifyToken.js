const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Đảm bảo đúng đường dẫn

module.exports = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Bearer token
  if (!token) return res.status(401).json({ message: 'Access denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.userId); // Lấy từ DB
    if (!user) return res.status(404).json({ message: 'User not found' });

    req.user = user; // Gán đầy đủ user vào req
    next();
  } catch (err) {
    res.status(403).json({ message: 'Invalid token' });
  }
};
