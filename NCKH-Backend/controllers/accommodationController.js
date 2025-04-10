const Accommodation = require('../models/Accommodation');
const logAdminAction = require('../utils/logAdminAction');

// GET all
exports.getAllAccommodations = async (req, res) => {
  try {
    const accommodations = await Accommodation.find();
    res.json(accommodations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET by ID
exports.getAccommodationById = async (req, res) => {
  try {
    const acc = await Accommodation.findById(req.params.id);
    if (!acc) return res.status(404).json({ message: 'Accommodation not found' });
    res.json(acc);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST
exports.createAccommodation = async (req, res) => {
  try {
    const newAcc = new Accommodation(req.body);
    const saved = await newAcc.save();
    await logAdminAction(req.user._id, `Thêm mới Accommodation: ${saved._id}`);

    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT
exports.updateAccommodation = async (req, res) => {
  try {
    const updated = await Accommodation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    await logAdminAction(req.user._id, `Cập nhật Accommodation: ${req.params.id}`);

    if (!updated) return res.status(404).json({ message: 'Accommodation not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE
exports.deleteAccommodation = async (req, res) => {
  try {
    const deleted = await Accommodation.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Accommodation not found' });
    res.json({ message: 'Deleted successfully' });
    await logAdminAction(req.user._id, `Xóa Accommodation: ${req.params.id}`);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
