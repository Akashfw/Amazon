const express = require("express");
const {Productmodel} = require("../model/product_model");
const productroute= express.Router();
productroute.use(express.json())

productroute.post("/create",async (req,res)=>{
    const {category,img,brand,discription,rating,price,discount}=req.body;
    try {
            const product=new Productmodel({category,img,brand,discription,rating,price,discount})
            await product.save()
            res.send({"msg":"product has been added"})
    } catch (err) {
        res.send("error in adding product");
        console.log(err)
    }
});

productroute.get("/mens",async(req,res)=>{
    try {
        const product= await Productmodel.find({category:"mens"});
        res.send(product);
    } catch (err) {
        res.send("something went wrong");
        console.log(err);
    }
})

module.exports={
    productroute
}