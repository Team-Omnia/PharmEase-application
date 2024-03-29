//route vrificatin and authentication of the web token
const jsonwebtoken = require('jsonwebtoken')

const verifyAuth = (req,res,next)=>{
    const bearHeader = req.headers["authorization"]
    if(typeof bearHeader =="undefined")
    {
    res.status(403).json([{message:"token required"}])
    }
    else{
    try{
    const bearer = bearHeader.split(' ')
    const b_token = bearer[1]
    req.token = b_token
     req.decoded = jsonwebtoken.verify(b_token,"admin")
    next();
    }
    catch(err){
    console.log("invalid Token")
    res.status(403).json([{message:"invalid Token"}])
    }
    }
    };

    module.exports = {verifyAuth}