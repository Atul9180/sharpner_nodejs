const path = require('path');
const express = require('express');
const route = express.Router();
const rootDir = require('../util/path');

route.get('/contactus',(req,res,next) => {
    res.sendFile(path.join(rootDir,'views','contactus.html'));
});

route.post('/contactus',(req,res,next) => {
    console.log(req.body);
    res.redirect('/success');
});

route.get('/success',(req,res,next)=>{
    res.send("<h1>Form successfuly filled</h1>")
})

module.exports = route;