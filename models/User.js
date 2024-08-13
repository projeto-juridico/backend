// models/User.js
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: false, unique: false },
  password: { type: String, required: false, unique: false },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
