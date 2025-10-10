const mongoose = require('mongoose');

const simpleOrderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  payment: { type: String, required: true },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      name: String,
      price: Number,
      image: String
    }
  ],
  totalPrice: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Order', simpleOrderSchema);
