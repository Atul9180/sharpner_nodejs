//importing class or constructor fn.
const Sequelize = require('sequelize')


//create instance from imported construction function with params as: (dbname,username,password,{options_Type})\
//this will automatically set a connection pool
const sequelize = new Sequelize('node-complete','root','atul123',{
    dialect: 'mysql',
    host:'localhost'
})      



//export pool--it will be in promises form to handle asynchronous data
module.exports = sequelize;
