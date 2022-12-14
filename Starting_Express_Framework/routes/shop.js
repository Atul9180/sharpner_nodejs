const path = require('path');
const express = require('express');
const route = express.Router();
const rootDir = require('../util/path');

route.get('/shop',(req,res,next) => {
    res.sendFile(path.join(rootDir,'views','shop.html'));
});

module.exports = route;