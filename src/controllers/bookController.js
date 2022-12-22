
const bookModel = require("../models/bookModel")
const authorModel = require("../models/authorModel")
const publiherModel = require("../models/publisherModel")

const createBook = async function (req, res) {
    let { name, author, price, rating, publisher } = req.body

    if (!author) {
        return res.send({ msg: "Author is required" })
    }

    if (!publisher) {
        return res.send({ msg: "Publisher is required" })
    }

    let authorDetails = await authorModel.findOne({ _id: author })

    if (!authorDetails) {
        return res.send({ msg: "Invalid author Id" })
    }

    let publisherDetails = await publiherModel.findOne({ _id: publisher })

    if (!publisherDetails) {
        return res.send({ msg: "Invalid publisher Id" })
    }

    let bookCreated = await bookModel.create(req.body)
    res.send({ data: bookCreated })
}
 
const getBooksData = async function (req, res) {
    let books = await bookModel.find().populate('author').populate('publisher')
    res.send({ data: books })
}

const getBooksWithAuthorDetails = async function (req, res) {
  /*   let publishers = await publiherModel.find({ name: { $in: ['Penguin', 'HarperCollins'] } })
    let publisherId = publishers.map(publisher => publisher._id)

    let updateData = await bookModel.updateMany({publisher:{$in:publisherId}},
                                                {$set:{isHardCover: true}},
                                                {new: true})
 */

 let updateData = await bookModel.updateMany({rating:{$gt:3.5}},{price: {$inc: 10}},{new:true})

 
    
    res.send({ data: updateData })

} 

module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
