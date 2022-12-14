const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();

router.get('/add-product',(req,res,next) => {
     res.sendFile(path.join(rootDir,'views','add_product.html'));
});

router.post('/product',(req,res,next) => {
    console.log(req.body);
    res.redirect('/shop');
});


module.exports = router;