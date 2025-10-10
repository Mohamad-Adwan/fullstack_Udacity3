const express = require('express');
const router = express.Router();
const { addOrder, getOrderById, getOrders } = require('../controllers/orderController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').post( addOrder).get(  getOrders);
router.route('/:id').get(protect, getOrderById);

module.exports = router;
