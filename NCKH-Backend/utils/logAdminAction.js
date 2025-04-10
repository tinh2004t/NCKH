// utils/logAdminAction.js
const AdminLog = require('../models/AdminLog');

const logAdminAction = async (adminId, action) => {
    try {
      if (!adminId) throw new Error('adminId không tồn tại');
      await AdminLog.create({
        adminId,
        action
      });
    } catch (err) {
      console.error('Ghi log admin thất bại:', err.message);
    }
  };
  

module.exports = logAdminAction;
