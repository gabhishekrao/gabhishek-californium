const express = require('express');
const router = express.Router();
const _ = require('underscore')
const req = require('express/lib/request');
const { route } = require('express/lib/application');
const movies = require('./movies')
const filmsObject = require('./filmsObj')


/* // 1st

router.get("/GET/movies", function (req, res) {
    let a = movies.arr
    console.log("Your arrays of movies are ",a)
    res.send(a)
}) 
 */
 

/* // 2nd and 3rd
router.get("/GET/movies/:a", function (req, res) {
    let a = req.params.a
    let b = movies.index(a)
    res.send(b)
})
 */
 

/* 
// 4th

router.get("/GET/films", function (req, res) {
    let a = filmsObject.obj
    res.send(a)
})

 */

//5th

router.get("/GET/films/:a", function (req, res) {
    let a = req.params.a
    let b = filmsObject.filmId(a)
    res.send(b)
})  




module.exports = router;