const express = require('express');
const helloRoute = require('./routes/hello');
const mongoose  = require('mongoose');

const PORT = 3000;

const app = express();

const DB = "mongodb+srv://agussriindrawan:!!Password12345!!@cluster0.ajfgo.mongodb.net/";

app.use(helloRoute);

mongoose.connect(DB).then(()=>{
    console.log('mongodb connected');
});

app.listen(PORT,"0.0.0.0", function(){
    console.log(`server is running on port ${PORT}`)
});