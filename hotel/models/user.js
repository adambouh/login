// Replace this line with your actual Mongoose import
const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  // You can add more fields as needed for your user data
  // For example: name, dateOfBirth, etc.
});

// Create a User model using the user schema
const User = mongoose.model('User', userSchema);

module.exports = User;
