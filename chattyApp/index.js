const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');

app.use(bodyParser.urlencoded());

const messageRouter = require('./routes/message');
const loginRouter = require('./routes/login');


app.use(messageRouter)
app.use(loginRouter)

app.listen(4000);

