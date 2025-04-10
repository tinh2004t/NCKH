const Tour = require('../models/Tour');
const logAdminAction = require('../utils/logAdminAction');


// GET all
exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find().populate('destinationId', 'name location');
    res.json(tours);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET by ID
exports.getTourById = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id).populate('destinationId', 'name location');
    if (!tour) return res.status(404).json({ message: 'Tour not found' });
    res.json(tour);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST
exports.createTour = async (req, res) => {
  try {
    const newTour = new Tour(req.body);
    const saved = await newTour.save();
    res.status(201).json(saved);
    await logAdminAction(req.user._id, `Thêm mới tour: ${code}`);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT
exports.updateTour = async (req, res) => {
  try {
    const updated = await Tour.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Tour not found' });
    res.json(updated);
    await logAdminAction(req.user._id, `Cập nhật tour: ${code}`);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE
exports.deleteTour = async (req, res) => {
  try {
    const deleted = await Tour.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Tour not found' });
    res.json({ message: 'Deleted successfully' });
    await logAdminAction(req.user._id, `Xóa tour: ${code}`);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
