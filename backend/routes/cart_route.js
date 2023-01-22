const express = require("express");
const {Cartmodel} = require("../model/cart_model");
const cartroute= express.Router();
cartroute.use(express.json())

cartroute.post("/add",async (req,res)=>{
    const {category,img,brand,discription,rating,price,discount}=req.body;
    try {
            const cart=new Cartmodel({category,img,brand,discription,rating,price,discount})
            await cart.save()
            res.send({"msg":"item has been added to cart"})
    } catch (err) {
        res.send({"msg":"error in adding product"});
        console.log(err)
    }
});

cartroute.get("/item",async(req,res)=>{
    try {
        const cart= await Cartmodel.find();
        res.send(cart);
    } catch (err) {
        res.send("something went wrong");
        console.log(err);
    }
})

module.exports={
    cartroute
}