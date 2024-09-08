// models/Profile.js
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: String,
  breed: String,
  age: String,
  profilePicture: String, // Store the path of the uploaded file
});

module.exports = mongoose.model('Profile', profileSchema);
