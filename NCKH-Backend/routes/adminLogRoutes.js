const express = require('express');
const router = express.Router();
const AdminLog = require('../models/AdminLog');

router.get('/', async (req, res) => {
  try {
    const logs = await AdminLog.find().sort({ actionDate: -1 });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
