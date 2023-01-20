const express = require("express");
const {Usermodel} = require("../model/user_model");
const bcrypt= require("bcrypt");
const jwt = require("jsonwebtoken");
const userroute= express.Router();
require("dotenv").config();



userroute.post("/register",async (req,res)=>{
    const {name,email,pass,mobile}=req.body
    try{
     const user=await Usermodel.find({email})
     if(user.length>0){
        res.send({"msg":"user already registered"})
     }else{
        bcrypt.hash(pass, 8, async (err, hash)=>{
            const user=new Usermodel({name,email,pass:hash,mobile})
            await user.save()
            res.send({"msg":"user has been registered"})
            });
     }
    }catch(err){
    res.send("Error in registering the user")
    console.log(err)
    }
    })
    

    userroute.post("/login",async (req,res)=>{
        const {email,pass}=req.body
       
        try{
        const user=await Usermodel.find({email})
        if(user.length>0){
        bcrypt.compare(pass, user[0].pass, function(err, result) {
        if(result){
        const token = jwt.sign({ course: 'backend' }, process.env.key);
        res.send({"msg":"Login Successfull","token":token,"user":user[0]})
        } else {res.send("Wrong Credntials")}
        });
        } else {
        res.send("Wrong Credntials")
        }
        } catch(err){
        res.send("Something went wrong")
        console.log(err)
        }
        });

        module.exports={
            userroute
        }