const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {

  try {
    let data = req.body;
    let savedData = await userModel.create(data);
    res.send({ msg: savedData });
  } catch (err) {
    res.send({ msg: "error", error: err })
  }
};

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    })


  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "californium",
      organisation: "FunctionUp",
    },
    "functionup-californium"
  );
  res.send({ status: true, data: token });
  console.log(token)
};

const getUserData = async function (req, res) {


  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
};

const updateUser = async function (req, res) {


  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
  res.send({ status: updatedUser, data: updatedUser });
};

const postMessage = async function (req, res) {
  let message = req.body.message

  let user = await userModel.findById(req.params.userId)
  if (!user) return res.send({ status: false, msg: 'No such user exists' })

  let updatedPosts = user.posts
  //add the message to user's posts
  updatedPosts.push(message)
  let updatedUser = await userModel.findOneAndUpdate({ _id: user._id }, { posts: updatedPosts }, { new: true })

  //return the updated user document
  return res.send({ status: true, data: updatedUser })
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage
