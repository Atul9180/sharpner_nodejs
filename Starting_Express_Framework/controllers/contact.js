const path = require('path');
const rootDir = require('../util/path');

exports.getContactFormController = (req,res,next) => {
    res.sendFile(path.join(rootDir,'views','contactus.html'));
};

exports.postContactFormController = (req,res,next) => {
   
   res.redirect('/success');
};

exports.getSuccessMsgContactFormController = (req,res,next) => {
    console.log("form contact success");
    res.send("<h5>success</h5>")
 };