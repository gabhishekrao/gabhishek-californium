const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")
const AuthorController = require("../controllers/authorController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createBook", BookController.createBook)

router.get("/getBooksData", BookController.getBooksData)

router.post("/createAuthor", AuthorController.createAuthor)
router.get("/getAuthorData", AuthorController.getAuthorData)
 


module.exports = router;