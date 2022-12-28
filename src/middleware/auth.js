const jwt = require("jsonwebtoken");


const authenticate = async function (req, res, next) {

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
}


const authorise = function (req, res, next) {

  let x = req.decodedToken

  let userToBeModified = req.params.userId

  let userLoggedIn = x.userId

  if (userToBeModified != userLoggedIn) return res.send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })

  next()
}


module.exports.authenticate = authenticate
module.exports.authorise = authorise