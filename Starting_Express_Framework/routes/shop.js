const express = require('express');
const route = express.Router();

route.get('/',(req,res,next) => {
    res.send('<h1>Hi this is HomePage.</h1>')
});

module.exports = route;