const mongoose= require("mongoose");

const cartSchema= mongoose.Schema({
    category:String,
    img:String,
    brand:String,
    discription:String,
    rating:String,
    price:Number,
    discount:String
});

const Cartmodel= mongoose.model("cart",cartSchema);


module.exports={
    Cartmodel
}