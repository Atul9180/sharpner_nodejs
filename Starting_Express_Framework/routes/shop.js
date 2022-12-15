const express = require('express');
const route = express.Router();

const shopController = require('../controllers/shop')

route.get('/shop',shopController.getShopDataController);

module.exports = route;