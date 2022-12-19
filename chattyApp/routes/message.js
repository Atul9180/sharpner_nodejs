const express= require('express');
const fs = require('fs')
const router = express.Router()

router.get("/",(req,res,next)=>{
    fs.readFile('username.txt',(err,data)=>{
        if(err){
            data = 'no message available..';
        }
        res.send(`<div>${data}</div><br /><hr /><h5>Write your Message here:</h5>
        <form action="/" method="POST" onSubmit="document.getElementById('username').value=JSON.parse(localStorage.getItem('username'))">
        <input id="message" type="text" name="message" required />
        <input id="username" type="hidden" name"username" /><br />
        <button type="submit">Send</button>
        </form>`)
    }); 
 });

 router.post("/",(req,res)=>{
    console.log(req.body.username)
    console.log("testing",req.body)    
    fs.writeFile("username.txt",`${req.body.username}: ${req.body.message} \n`,{flag: 'a'}, (err)=>err?console.log(err):res.redirect("/"))
})


module.exports = router;