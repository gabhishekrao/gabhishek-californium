const jwt = require("jsonwebtoken");


const authenticate = async function(req, res, next) {
    //check the token in request header
    //validate this token
    let token = req.headers["x-Auth-Token"];
    if (!token) token = req.headers["x-auth-token"];
  
    //If no token is present in the request header return error
    if (!token) return res.send({ status: false, msg: "token must be present" });
  
    console.log(token);
     
 
    let decodedToken = jwt.verify(token, "functionup-californium");
    if (!decodedToken) 
      return res.send({ status: false, msg: "token is invalid" });

    next()
}




module.exports.authenticate = authenticate
