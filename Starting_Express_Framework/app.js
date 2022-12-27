const path = require('path');
const cors = require('cors')

const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


//routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactusRoute = require('./routes/contact');
const error404Route = require('./routes/error404');


//models
const Product = require('./models/product')
const User = require('./models/user')


//middlewares
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use((req,res,next)=>{ 
    User.findByPk(1)
    .then(user=>{
        req.user = user;
        next();
    })
    .catch(err=>console.log(err))
});


//registering routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactusRoute);
app.use(error404Route);


//Relationship betwwn tables: i.e associations: defing type of relation
Product.belongsTo(User,{Constraints: true, onDelete: "CASCADE"});
User.hasMany(Product);      //one user many products


//Sequelize========= .sync() will create tables out of model on app run
//bts it auto creates CREATE TABLE query with if not exists check on app run
sequelize
    // .sync({force:true})          //force:true means override existing table--not req. in prod
    .sync()
    .then(result=>{  
        return User.findByPk(1)  
    })
    .then(user=>{
        if(!user){
           return User.create({name:'atul',email:'atul@gmail.com'});
        }
        return user;
    })
    .then(user=>{
        console.log(user)
        app.listen(3000)
    })
    .catch(err=>console.log(err))



