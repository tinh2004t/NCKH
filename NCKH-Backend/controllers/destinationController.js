const Destination = require('../models/Destination');
const logAdminAction = require('../utils/logAdminAction');


// GET all
exports.getAllDestinations = async (req, res) => {
  try {
    const data = await Destination.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST
exports.createDestination = async (req, res) => {
  try {
    const newDestination = new Destination(req.body);
    const saved = await newDestination.save();
    res.status(201).json(saved);
    await logAdminAction(req.user._id, `Thêm điểm đến: ${code}`);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// GET by ID
exports.getDestinationById = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    if (!destination) return res.status(404).json({ message: 'Not found' });
    res.json(destination);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PUT
exports.updateDestination = async (req, res) => {
  try {
    const updated = await Destination.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Not found' });
    res.json(updated);
    await logAdminAction(req.user._id, `Cập nhật điểm đến: ${code}`);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE
exports.deleteDestination = async (req, res) => {
  try {
    const deleted = await Destination.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted successfully' });
    await logAdminAction(req.user._id, `Xóa điểm đến: ${code}`);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
