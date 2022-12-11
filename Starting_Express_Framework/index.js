const express = require('express');
const bodyParser= require('body-parser')
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:false}));  //parse theform data from body

//added '/add-product' middleware prior to '/' middleware. else everytime even for '/add-prod...or other '/' middleware works
app.use('/add-product',(req,res,next) => {
    res.send('<form action="/product">Product Name:<input type="text" name="title" /><br />Product Size:<input type="text" name="size" /><br /><button type="submit">Add Product</button></form>') 
});

app.use('/product',(req,res,next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/',(req,res,next) => {
    res.send('<h1>Hi this is HomePage.</h1>')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))