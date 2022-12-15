const path = require('path');
const rootDir = require('../util/path');

const products = [];

exports.getAddProductsController = (req,res,next) => {
    res.sendFile(path.join(rootDir,'views','add_product.html'));
}

exports.postAddProductsController = (req,res,next) => {
    //console.log("direct add prod data",req.body);
    products.push({title: req.body.title , size:req.body.size })
    console.log("from array add prod data",products);
    res.redirect('/shop');
}