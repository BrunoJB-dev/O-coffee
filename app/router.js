const express = require('express');
const mainController = require('../app/controllers/mainController');
const router = express.Router();




router.get('/', mainController.homePage);

module.exports = router;