const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const userAuthentication = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", userController.createUser)

router.post("/login", userController.loginUser) 

//The userId is sent by front end
router.get("/userData/:userId",userAuthentication.authenticate, userController.getUserData)

router.put("/updateUser/:userId",userAuthentication.authenticate, userController.updateUser)
//router.delete('/users/:userId', userController.deleteUser)


 

module.exports = router;