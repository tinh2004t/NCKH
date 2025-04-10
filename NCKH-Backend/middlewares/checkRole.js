exports.checkAdminRole = (req, res, next) => {
  try {
    if (req.user && req.user.role === 'Admin') {
      next();
    } else {
      return res.status(403).json({ message: 'Chỉ Admin mới được phép thực hiện thao tác này.' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
