const fs=require('fs');
const path = require('path');

const requestHandler=(request,response)=>{
    const url= request.url;
    const method=request.method;

    if(url==='/'){
        const filepath=path.join(__dirname,"message.txt");
        fs.readFile(filepath,{encoding:"utf8"} ,(err, contents)=>{
            if(err){
                return console.log("NO data/file found",err);               
            }
            response.write('<html>')
            response.write(`<head><title>Enter Message</title></head><body><div>`)
            response.write(`<fieldset><legend><b>Messages:</b></legend>${contents}</fieldset></div>`)
            response.write('<hr /><center><h4>Use this form to submit data to file.</h4></center><form action="/message" method="POST" ><input type="text" name="message" required /><button type="submit">Submit</button></form></body> ')
            response.write('</html>')
            return response.end();            
            });
    }
    
    if(url==='/message' && method ==='POST'){
        const body=[];  //to store data
        request.on('data',(dataPart)=>{
            body.push(dataPart);
        })
        request.on('end',()=>{
            //parse the data from buffer
            const parsedBody=Buffer.concat(body).toString().split("+").join(" ");
            const msg=parsedBody.split("=")[1].concat(" || ");
            fs.appendFile("message.txt",`${msg}`, (err)=>{if(err!==null)console.log("error: ",err)});
            response.statusCode=302;
            response.setHeader('Location','/');
            return response.end();
        })        
    }

    if(request.url==='/home'){
        response.write('<h1>Welcome to Home Page</h1>')
        return response.end();
    }
    if(request.url==='/about'){
        response.write('<h1>Welcome to about Us Page</h1>')
        return response.end();
    }
    if(request.url==='/node'){
        response.write('<h1>Welcome to my Node Js project</h1>')
        return response.end();
    }
}

        //3 ways to export the object 
        
//module.exports=requestHandler;

// module.exports={handler:requestHandler};

module.exports.handler = requestHandler;