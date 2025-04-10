const Flight = require('../models/Flight');
const logAdminAction = require('../utils/logAdminAction');


// GET all
exports.getAllFlights = async (req, res) => {
  try {
    const flights = await Flight.find();
    res.json(flights);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET by ID
exports.getFlightById = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    if (!flight) return res.status(404).json({ message: 'Flight not found' });
    res.json(flight);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST
exports.createFlight = async (req, res) => {
  try {
    const newFlight = new Flight(req.body);
    const saved = await newFlight.save();
    res.status(201).json(saved);
    await logAdminAction(req.user._id, `Thêm chuyến bay: ${code}`);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT
exports.updateFlight = async (req, res) => {
  try {
    const updated = await Flight.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Flight not found' });
    res.json(updated);
    await logAdminAction(req.user._id, `Cập nhật chuyến bay: ${code}`);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE
exports.deleteFlight = async (req, res) => {
  try {
    const deleted = await Flight.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Flight not found' });
    res.json({ message: 'Deleted successfully' });
    await logAdminAction(req.user._id, `Xóa chuyến bay: ${code}`);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
