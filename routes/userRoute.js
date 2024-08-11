const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/check-user', userController.checkUserExists);

module.exports = router;
