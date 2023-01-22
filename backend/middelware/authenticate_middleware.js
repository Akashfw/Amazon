const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticate=(req,res,next)=>{
    const token = req.headers.authorization;
    console.log(token)
     if(token){
        const decoded_token= jwt.verify(token,process.env.key);
        if(decoded_token){
            next()
        }else{
            res.send({"msg":"Please Log-in"})
        }
     }else{
        res.send({"msg":"Please Log-in"})
     }
}

module.exports={
    authenticate
}