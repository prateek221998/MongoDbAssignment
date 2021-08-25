const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const url = 'mongodb://localhost:27017/schoolDB'
const port = 9000;

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect(url,{ useNewUrlParser:true, useUnifiedTopology : true});
const con = mongoose.connection;
con.on('open', () => console.log("Connected"));

app.use('/school',require('./routes/schools'));

app.listen(port,() => {
    console.log('server started')
});
