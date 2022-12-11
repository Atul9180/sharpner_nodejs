const express = require('express');
const app = express();
const port = 3000;

//this middleware will run for all
app.use((req,res,next) => {
    console.log('in middleware 1!');
    next();                             //alows the req to continue to next middleware in line
});

app.use((req,res,next)=>{
    console.log('in middleware 2!');
    res.send('<h1>Hello from express</h1>');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))