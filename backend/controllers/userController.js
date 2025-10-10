// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/userModel');

// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
// };

// const registerUser = async (req, res) => {
//   const { name, email, password } = req.body;
//   if (!name || !email || !password) {
//     res.status(400);
//     return res.json({ message: 'Please provide name, email and password' });
//   }

//   const userExists = await User.findOne({ email });
//   if (userExists) {
//     res.status(400);
//     return res.json({ message: 'User already exists' });
//   }

//   const salt = await bcrypt.genSalt(10);
//   const hashed = await bcrypt.hash(password, salt);

//   const user = await User.create({ name, email, password: hashed });
//   if (user) {
//     res.status(201).json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       isAdmin: user.isAdmin,
//       token: generateToken(user._id)
//     });
//   } else {
//     res.status(400);
//     return res.json({ message: 'Invalid user data' });
//   }
// };

// const authUser = async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email });
//   if (user && (await bcrypt.compare(password, user.password))) {
//     res.json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       isAdmin: user.isAdmin,
//       token: generateToken(user._id)
//     });
//   } else {
//     res.status(401);
//     res.json({ message: 'Invalid email or password' });
//   }
// };

// const getUserProfile = async (req, res) => {
//   if (!req.user) {
//     res.status(401);
//     return res.json({ message: 'Not authorized' });
//   }
//   res.json(req.user);
// };

// module.exports = { registerUser, authUser, getUserProfile };
