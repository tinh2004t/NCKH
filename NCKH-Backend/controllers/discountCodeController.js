const DiscountCode = require('../models/DiscountCode');
const logAdminAction = require('../utils/logAdminAction');


exports.createDiscountCode = async (req, res) => {
  try {
    const { code, discountPercentage, maxUsage, expiryDate } = req.body;

    const newCode = new DiscountCode({
      code,
      discountPercentage,
      maxUsage,
      expiryDate
    });

    const saved = await newCode.save();
    await logAdminAction(req.user._id, `Tạo mã giảm giá: ${code}`);

    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.applyDiscountCode = async (req, res) => {
  try {
    const { code } = req.body;

    const discount = await DiscountCode.findOne({ code, isActive: true });
    if (!discount) return res.status(404).json({ message: 'Mã không tồn tại hoặc đã hết hạn' });

    const now = new Date();
    if (discount.expiryDate < now || discount.usageCount >= discount.maxUsage) {
      return res.status(400).json({ message: 'Mã đã hết hạn hoặc vượt giới hạn sử dụng' });
    }

    res.json({ 
      discountPercentage: discount.discountPercentage,
      message: 'Áp dụng mã thành công'
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
