const express = require('express');
const bodyParser= require('body-parser');

const app = express();
const port = 3000;

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:true}));  //parse theform data from body

//registering routes to app object, order of placing matters(if used .use in router)
    app.use(adminRoutes);       
    app.use(shopRoutes);

    app.use(express.static(__dirname + '/public')); 
//handling 404 error pages
app.use((req,res,next)=>{
    res.status(404).send('<h2>Page not found</h2>')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));