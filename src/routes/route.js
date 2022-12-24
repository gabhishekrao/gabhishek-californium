const express = require('express');
const router = express.Router();
const masterController = require("../controllers/controller")
const commonMW = require("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createProduct", masterController.createProduct)
router.post("/createUser",commonMW.isFreeAppUser,masterController.createUser)
router.post("/createOrder",commonMW.isFreeAppUser,commonMW.isUserExist,commonMW.isProductExist,masterController.createOrder)

module.exports = router; 