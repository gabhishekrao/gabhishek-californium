const jwt = require("jsonwebtoken");


const authenticate = async function (req, res, next) {
try {

  let token = req.headers["x-Auth-Token"];
  if (!token) token = req.headers["x-auth-token"];

  //If no token is present in the request header return error
  if (!token) return res.send({ status: false, msg: "token must be present" });

  console.log(token);


  let decodedToken = jwt.verify(token, "functionup-californium");
  req.decodedToken = decodedToken
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

  next() 

} catch (err) {
  res.status(400).send({msg: "error", error : err.message})
}
}
  


const authorise = function (req, res, next) {
  try {
    
    let x = req.decodedToken
  
    let userToBeModified = req.params.userId
  
    let userLoggedIn = x.userId
  
    if (userToBeModified != userLoggedIn) return res.send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })
  } catch (err) {
    res.send({msg: "error", error : err.message})
  }

  next()
}


module.exports.authenticate = authenticate
module.exports.authorise = authorise