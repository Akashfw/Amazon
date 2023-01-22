const mongoose= require("mongoose");

const productSchema= mongoose.Schema({
    category:String,
    img:String,
    brand:String,
    discription:String,
    rating:String,
    price:Number,
    discount:String
});

const Productmodel= mongoose.model("product",productSchema);


module.exports={
    Productmodel
}