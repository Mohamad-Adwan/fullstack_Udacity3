const Product = require('../models/productModel');

// @desc    Get all products
// @route   GET /api/products
const getProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

// @desc    Get product by ID
// @route   GET /api/products/:id
const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) res.json(product);
  else {
    res.status(404);
    res.json({ message: 'Product not found' });
  }
};

// @desc    Create a product (admin)
// @route   POST /api/products
const createProduct = async (req, res) => {
  const { name, description, price, imageUrl, countInStock } = req.body;
  const product = new Product({ name, description, price, imageUrl, countInStock });
  const created = await product.save();
  res.status(201).json(created);
};

// @desc    Update a product (admin)
// @route   PUT /api/products/:id
const updateProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404);
    return res.json({ message: 'Product not found' });
  }
  const { name, description, price, imageUrl, countInStock } = req.body;
  product.name = name || product.name;
  product.description = description || product.description;
  product.price = price !== undefined ? price : product.price;
  product.imageUrl = imageUrl || product.imageUrl;
  product.countInStock = countInStock !== undefined ? countInStock : product.countInStock;

  const updated = await product.save();
  res.json(updated);
};

// @desc    Delete a product (admin)
// @route   DELETE /api/products/:id
const deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ message: 'Product removed' });
  } else {
    res.status(404);
    res.json({ message: 'Product not found' });
  }
};

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct };
