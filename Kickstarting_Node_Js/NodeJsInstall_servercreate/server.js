const http=require('http');
const PORT=4000;

const server = http.createServer((request,response)=>{ 
   // if(request.url==='/'){
    console.log('Atul Patel')
    response.end('<h1>Atul Patel</h1>');
//}
})

server.listen(PORT,()=>console.log(`Atul server running on port ${PORT}`));
