const http=require('http');
const fs=require('fs');

const server = http.createServer((request,response)=>{ 
    const method=request.method;

    if(request.url==='/'){
        fs.readFile("message.txt","utf8" ,(err, contents)=>{
            if(err){
               console.log("NO data/file found",err);
               return;
            }
            var contentf=contents.split(`,`)
            response.write('<html>')
            response.write(`<head><title>Enter Message</title></head><body><div>${contentf}\n</div>`)
            response.write('<center><h2>Use this form to submit data to file.</h2></center><form action="/message" method="POST" ><input type="text" name="message" required /><button type="submit">Submit</button></form></body> ')
            response.write('</html>')
            return response.end();            
            });
    }
    
    if(request.url==='/message' && method ==='POST'){
        const body=[];  //to store data
        request.on('data',(dataPart)=>{
            body.push(dataPart);
        })
        request.on('end',()=>{
            //parse the data from buffer
            const parsedBody=Buffer.concat(body).toString().split("+").join(" ");
            const msg=parsedBody.split("=")[1];
            fs.appendFile("message.txt",`\n${msg}`, (err)=>{if(err!==null)console.log("error: ",err)});
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

})

server.listen(4000,()=>console.log(`Atul server running on port 4000`));
