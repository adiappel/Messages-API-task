const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000
require('dotenv/config');

//import routes
const messagesRoute = require('./routes/messages');

//middleware
app.use(bodyParser.json());
app.use('/messages', messagesRoute);


//home route
app.get('/', (req, res) => {
    res.send('Hello there');
});


//connect to DB
mongoose.connect(process.env.DB_CONNECTION, 
() => console.log('connected to DB'));

app.listen(port);
