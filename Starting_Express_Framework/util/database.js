const mysql = require('mysql2');


// as each querya need a separate connection and creating new conncection for eacah query is tedius
// and risky so better create a pool say creates multiple connections ....i.e reate a pool of connections
// and reach out to them whenever a new query is run and then get a new connection form pool
//once query is done connection will be handled back and ready to serve new query
//Pool finishes when application shuts down -- use "db.end()" inside app.js to shut down 
const pool = mysql.createPool({
    host:'localhost',
    user: 'root',
    database: 'node-complete',
    password: 'atul123'
});


//export pool--do in promises form to handle asynchronous data instead of cb as promises lets write code in more structured way
module.exports = pool.promise();
