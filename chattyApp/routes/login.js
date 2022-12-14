const express= require('express');
const router = express.Router();

router.get('/login', (req, res) =>{ 
    res.send(`<form onsubmit="localStorage.setItem('userName', document.getElementById('uname').value)" action="/product" method="POST"><input id="uname" type="text" name="userName"><button type="submit">add</button></form>`)
})

router.post('/product',(req,res)=>{
    res.redirect('/');
})


module.exports = router;