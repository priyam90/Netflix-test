const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require("express");

dotenv.config({path:'./config.env'});
const DB = process.env.DATABASE;

mongoose.connect(DB,
    {
    useNewUrlParser:true,     
    
    useUnifiedTopology:true,
    }).then((res)=>{console.log("connected Succefful");})
    .catch((e)=>{console.log(e);})

