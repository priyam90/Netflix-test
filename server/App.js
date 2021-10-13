const dotenv = require('dotenv');
const express = require("express");
const app= express();
dotenv.config({path:'./config.env'});
port = process.env.PORT;
require('./db/conn');

app.use(express.json());
// Linking the router file to make a route
app.use(require('./router/auth'));

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))


//const User = require("./model/userSchema");



app.get('/Home', (req,res)=>{
    res.send("<h1>Hello Home Server</h1>")
})



app.listen(port,console.log(`Hi my port:${port}`));