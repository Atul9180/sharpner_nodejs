const http = require('http');
const requestHandler = require('./routes');

// const server = http.createServer(requestHandler);
const server = http.createServer(requestHandler.handler);

server.listen(4000,()=>console.log(`Atul server running on port 4000`));
