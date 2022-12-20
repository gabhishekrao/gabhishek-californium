const { count } = require("console")
const AuthorModel = require("../models/authorModel")
const BookModel = require("../models/bookModel")

const createAuthor = async function (req, res) {
    let data = req.body

    let savedData = await AuthorModel.create(data)
    res.send({ msg: savedData })
}
 
const getAuthorData = async function (req, res) {
    let findAuthor = await AuthorModel.findOne({ author_name: /^Chetan Bhagat/i })
    let allBooks = await BookModel.find({ author_id: findAuthor.author_id })
    res.send({ msg: allBooks })
}





module.exports.createAuthor = createAuthor
module.exports.getAuthorData = getAuthorData