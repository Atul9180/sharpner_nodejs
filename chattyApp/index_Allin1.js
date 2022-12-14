const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');


app.use(bodyParser.urlencoded());

// const messageRouter = require('./routes/message');
// const loginRouter = require('./routes/login');


app.get("/",(req,res,next)=>{
    fs.readFile('username.txt',(err,data)=>{
        if(err){
            data = 'no message available..';
        }
        res.send(`<div>${data}</div><br /><hr /><h5>Write your Message here:</h5>
        <form action="/" method="POST" onSubmit="document.getElementById('username').value=localStorage.getItem('username')">
        <input id="message" type="text" name="message" required />
        <input id="username" type="hidden" name"username" /><br />
        <button type="submit">Send</button>
        </form>`)
    }); 
 });
 app.post("/",(req,res)=>{
    console.log(req.body.username)
    console.log(req.body.message)    
    fs.writeFile("username.txt",`${req.body.username}: ${req.body.message} \n`,{flag: 'a'}, (err)=>err?console.log(err):res.redirect("/"))
})

app.get('/login', (req, res) =>{ 
    res.send(`<form onsubmit="localStorage.setItem('userName', document.getElementById('uname').value)" action="/product" method="POST"><input id="uname" type="text" name="userName"><button type="submit">add</button></form>`)
})

app.post('/product',(req,res)=>{
    res.redirect('/');
})

// app.use(messageRouter)
// app.use(loginRouter)

app.listen(4000);



