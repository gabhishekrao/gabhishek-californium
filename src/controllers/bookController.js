const { count } = require("console")
const BookModel = require("../models/bookModel")
const AuthorModel = require("../models/authorModel")

const createBook = async function (req, res) {
    let data = req.body
    let savedData = await AuthorModel.findOne({ author_id: data.author_id })
    if (savedData) {
        BookModel.create(data)
        res.send({ msg: savedData })
    }
    else {
        res.send({ msg: "ID not found" })
    }
}
 
const getBooksData = async function (req, res) {
     /* let updateBookPrice = await BookModel.findOneAndUpdate(
         {name: /^Two states/i},
         {price : 100},
         {new : true}
         )
     let autherDetails = await AuthorModel.findOne({author_id : updateBookPrice.author_id}).select({author_name : 1, _id : 0})
 
 
   
 
     res.send({ msg: updateBookPrice, autherDetails}) */

    let priceRange = await BookModel.find({ price: { $gte: 50, $lte: 100 } }) //(50>100)
        .select({ author_id: 1, _id: 0 })

    res.send({ msg: priceRange })
}








module.exports.createBook = createBook
module.exports.getBooksData = getBooksData

