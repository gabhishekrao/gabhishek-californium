const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    prices: {
        indianPrice: String,
        europeanPrice: String

    },
    year: {
        type: Number,
        default: 2021
    },
    authorName: String,
    tags: [String], //array of strings
    totalPages: Number,
    stockAvailable: {
        type: Boolean,
        default: false
    },

}, { timestamps: true })



module.exports = mongoose.model('Novel', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
