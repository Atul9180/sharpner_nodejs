const express = require('express')
const router = express.Router();

router.get('/add-product',(req,res,next) => {
    res.send('<html><head><title>E-commerce Store</title></head><body><form action="/product" method="POST">Product Name:<input type="text" name="title" required />Size:<input type="text" name="size" required /><button type="submit">Add Product</button></form></body></html>') 
});

router.post('/product',(req,res,next) => {
    console.log(req.body);
    res.redirect('/');
});


module.exports = router;