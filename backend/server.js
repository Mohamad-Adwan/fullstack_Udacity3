require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
// const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const app = express();
const PORT = process.env.PORT || 5000;

// connect to DB
connectDB().then(async () => {
  console.log('MongoDB Connected');

  const Product = require('./models/productModel'); 
  const existing = await Product.findOne({ name: 'Test Product' });

  if (!existing) {
    await Product.create({
      name: 'Ear Phones',
      description: 'earphones with mic',
      price: 99,
      imageUrl: 'https://m.media-amazon.com/images/I/51tg3d0aHPL._UF1000,1000_QL80_.jpg'
    });
    console.log('Initial product ensured in DB');
  }
});
// middlewares
app.use(cors());
app.use(express.json()); // parse json bodies
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// routes
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
// app.use('/api/users', userRoutes);

// error handling
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
