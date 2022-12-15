const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products')


router.get('/add-product',productsController.getAddProductsController);

router.post('/product',productsController.postAddProductsController);


module.exports = router;