const express = require('express');
const router = express.Router();

const mainController = require('../app/controllers/mainController');
const catalogueController = require('../app/controllers/catalogueController');
const productController = require('../app/controllers/productController');





router.get('/', mainController.homePage);
router.get('/catalogue', catalogueController.cataloguePage);
router.get('/catalogue/all', catalogueController.getAllProducts);
router.get('/product/:id', productController.productDescription);



module.exports = router;