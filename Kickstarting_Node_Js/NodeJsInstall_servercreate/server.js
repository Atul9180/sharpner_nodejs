const http=require('http');

const server = http.createServer((request,response)=>{ 

    if(request.url==='/'){
        response.write('<h1>Atul Patel</h1>')
        response.end();
    }
    if(request.url==='/home'){
    response.write('<h1>Welcome to Home Page</h1>')
    response.end();
    }
    if(request.url==='/about'){
        response.write('<h1>Welcome to about Us Page</h1>')
        response.end();
    }
    if(request.url==='/node'){
        response.write('<h1>Welcome to my Node Js project</h1>')
        response.end();
    }

})

server.listen(4000,()=>console.log(`Atul server running on port 4000`));
