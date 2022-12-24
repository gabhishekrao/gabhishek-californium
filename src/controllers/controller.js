const userModel = require('../models/userModel')
const productModel = require('../models/productModel')
const orderModel = require('../models/orderModel')



const createUser = async function (req, res) {
   try {
      {
         const userCreated = await userModel.create({
            ...req.body,
            isFreeAppUser: req.headers['isFreeAppUser']
         })
         res.send({ msg: userCreated })
      }
   }
   catch (err) {
      console.log(err.message)
   }
}
const createProduct = async function (req, res) {
   try {
      {
         const productCreated = await productModel.create(req.body)
         res.send({ msg: productCreated })
      }
   }
   catch (err) {
      console.log(err.message)
   }
}
const createOrder = async function (req, res) {
   try {
      if (req.headers['isFreeAppUser'] == 'true') {
         await orderModel.create({
            ...req.body,
            amount: 0,
            isFreeAppTrue: req.headers['isFreeAppUser'],
         })
         res.send("Data saved in Order Table")
      }
      else {
         const orderedProductPrice = await productModel.find({ _id: req.body.productId }).select({ price: 1, _id: 0 })
         const userTotalBalance = await userModel.find({ _id: req.body.userId }).select({ balance: 1, _id: 0 })
         let pPrice = orderedProductPrice[0].price
         let userBal = userTotalBalance[0].balance
         if (userBal > pPrice) {
            await orderModel.create({
               ...req.body,
               amount: pPrice,
               isFreeAppTrue: req.headers['isFreeAppUser'],
            })
            await userModel.findOneAndUpdate(
               { _id: req.body.userId },
               { $inc: { balance: -(pPrice) } }
            )
            res.send("Order is Created")
         }
         else {
            res.send("insufficient balance in your account")
         }


      }


   }
   catch (err) {
      console.log(err.message)
   }
}


module.exports.createProduct = createProduct
module.exports.createUser = createUser
module.exports.createOrder = createOrder