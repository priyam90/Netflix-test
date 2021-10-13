const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs")
require("../db/conn");
const User = require("../models/userSchema");

router.get("/", (req, res) => {
  res.send("<h1>Hello World router</h1>");
});

router.post("/register", async (req, res) => {
  const { name, email, phone, password, cpassword } = req.body;
  if (!name || !email || !phone || !password || !cpassword)
    return res.status(422).json({ err: "Plz filled the document" });
  try {
    const userexist = await User.findOne({ email: email });
    if (userexist) {
      return res.json({ err: "email alerdy exist" });
    } else if (password != cpassword) {
    return res.json({ err: "password not matched"})
    }else{

      const user = new User({ name, email, phone, password, cpassword });
      console.log(user);

      const userr = await user.save();
    

    if (userr) {
      res.status(201).json({ message: "user registered successfully" });
    } else {
      res.status(500).send(`user not registered successfully${userr}`);
    }
  } }catch (e) {
    res.status(400).send(e);
  }
});

// login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ err: "please fill the data" });
    }
    const userLogin = await User.findOne({ email: email });
    if(userLogin){
        const isMatch = await bcrypt.compare(password,userLogin.password);

        const token= await userLogin.generateAuthToken();
        console.log(token);
        res.cookie("jwtoken", token,{
        expires: new Date(Date.now()+ 25892000000),
        httpOnly:true,
        Secure:true


        });
    if (!isMatch) {
      res.json({ err: "user error" });
    } else {
      res.json({ message: "user sign in successfully" });
    }
}else{
    res.json({ err: "user error" });
}

    
  } catch (e) {
    res.status(400).send(e);
  }
});
module.exports = router;
