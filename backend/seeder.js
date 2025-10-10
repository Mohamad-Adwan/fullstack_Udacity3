require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const connectDB = require('./config/db');
const Product = require('./models/productModel');
const User = require('./models/userModel');

const sampleProducts = [
  { name: 'Laptop', description: 'High performance', price: 1200, imageUrl: 'https://www.laptoparena.net/images/HP_aptop_4c81b0.jpg', countInStock: 5 },
  { name: 'Smartphone', description: 'Latest model', price: 800, imageUrl: 'https://images.samsung.com/is/image/samsung/p6pim/in/sm-a176bzalinu/gallery/in-galaxy-a17-5g-sm-a176-sm-a176bzalinu-thumb-548544573', countInStock: 10 },
  { name: 'Headphones', description: 'Noise cancelling', price: 150, imageUrl: 'https://m.media-amazon.com/images/I/71sBygGN7TL._UF1000,1000_QL80_.jpg', countInStock: 15 }
];

const seed = async () => {
  try {
    await connectDB();
    await Product.deleteMany();
    await User.deleteMany();

    const salt = await bcrypt.genSalt(10);
    const adminPass = await bcrypt.hash('123456', salt);
    const admin = await User.create({ name: 'Admin', email: 'admin@example.com', password: adminPass, isAdmin: true });

    const created = await Product.insertMany(sampleProducts);

    console.log('Seeded products and admin user.');
    console.log('Admin credentials: admin@example.com / 123456');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();
