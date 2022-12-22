const AuthorModel = require("../models/publisherModel")

const createPublisher = async function (req, res) {
    let publisher = req.body
    let authorCreated = await AuthorModel.create(publisher)
    res.send({ data: authorCreated })
}

const getPublisherData = async function (req, res) {
    let authors = await AuthorModel.find()
    res.send({ data: authors })
}

module.exports.createPublisher = createPublisher
module.exports.getPublisherData = getPublisherData 