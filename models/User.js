// models/User.js
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    nome: { type: String, required: false, unique: false},
    senha: { type: String, required: false, unique: false}
});

const User = mongoose.model('User', userSchema);

module.exports = User;
