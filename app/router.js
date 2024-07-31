const express = require('express');
const router = express.Router();

const mainController = require('../app/controllers/mainController');
const catalogueController = require('../app/controllers/catalogueController');






router.get('/', mainController.homePage);
router.get('/catalogue', catalogueController.cataloguePage);


module.exports = router;