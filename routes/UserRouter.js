const User = require("../Schema/UserSchema");
const express = require("express");
const UserRouter =  express.Router();

UserRouter.get("/",async(req,resp)=>{
  try{
  const users = await User.find();
  resp.status(201).json(users)
  }catch(err){
   console.log(err);
   resp.status(400).json("something went wrong");
 }
})


UserRouter.post("/signin",async(req,resp)=>{
   try{
    const {username,password}= req.body;
    console.log(username);
    const existingUser = await User.findOne({username:username});
    console.log(existingUser);
    resp.status(201).json({user:existingUser});
   }catch(err){
    console.log(err);
    resp.status(400).json("something went wrong");
  }
})

UserRouter.post("/register",async(req,resp)=>{
    console.log(req.body);
  try{
    const {username,password}= req.body

    const newUser = await new User({
        username,
        password
    })
    newUser.save();
    resp.status(201).json({user:newUser,message:"new user added"});
  }catch(err){
    resp.status(400).json("something went wrong")
  }
})


module.exports = UserRouter

