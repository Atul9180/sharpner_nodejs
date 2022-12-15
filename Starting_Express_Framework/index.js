const express = require('express');
const bodyParser= require('body-parser');
const path=require('path');


const app = express();
const port = 3000;

//static middleware -- via util folder focus public folder
    app.use(express.static(path.join(__dirname, 'public'))); 

//body-parser by express 
    app.use(bodyParser.urlencoded({extended:true}));  
    
//importing routes    
    const adminRoutes = require('./routes/admin');
    const shopRoutes = require('./routes/shop');
    const error404Route = require('./routes/error404');
    const contactusRoute = require('./routes/contact');

//registering routes to app object, order of placing matters(if used .use in router)
    app.use(adminRoutes);       
    app.use(shopRoutes);
    app.use(contactusRoute);    
    app.use(error404Route);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));