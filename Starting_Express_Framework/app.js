const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const db = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactusRoute = require('./routes/contact');
const error404Route = require('./routes/error404');



// db -------!SECTION //will be of promises form so uses {.then and .catch}
db.execute('SELECT * FROM products')
    .then(result=>{
        console.log(result[0][0].title);
    })
    .catch(error=>{
        console.log(err);
    })






app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactusRoute);
app.use(error404Route);

app.listen(3000);
