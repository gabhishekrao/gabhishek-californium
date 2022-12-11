const express = require('express');
const router = express.Router();

const _ = require('underscore')
// const come = require('../logger/logger') // 1st
// const help = require('../util/helper')    //2nd
//const upLow = require('../validator/formatter')//3rd



/* 
router.get('/test-me', function (req, res) {
    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Sabiha')
    console.log("email from employee module", employee.myEmail)

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let result = _.first(days, 4)
    console.log(`Result from underscore function is ${result}`)


    res.send('any dummy text')
}); 

*/

/*

// Ques - 1
router.get('/test-me', function (req, res) {
    come.welcome('Abhishek')
    res.send("Welcome to the new member!")
})


*/

/* 
// Ques- 2


router.get('/test-me', function (req, res) {
    help.printDate()
    help.printMonth()
    help.getBatchInfo("Californium",3 ,3, "Node.js")
    res.send("Your data is on terminal.")
})

*/


/*

// Ques - 3

router.get('/test-me', function (req, res) {
    let write = "AbhIshEK"
    upLow.trim(write)
    upLow.changeToLowerCase(write)
    upLow.changeToUpperCase(write)
    res.send("Your data is on terminal.")
}) 


*/


/*
// Ques 4(a)
router.get('/test-me', function (req, res) {
    let arr = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let dis = _.chunk(arr, 4)
    console.log("Array of months - ", dis)
    res.send("Your data is on terminal.")
})
 */


/* 
// 4(b)

router.get('/test-me', function (req, res) {
    let arr = [1,3,5,7,9,11,13,14,15,17]
    let dis = _.tail(arr)
    console.log("Array of odd numbers - ", dis)
    res.send("Your data is on terminal.")
})
 */


/* 
// 4(c)
router.get('/test-me', function (req, res) {
    let dis = _.union( [1,2,5,6,9,4],[2,3,6,54,8,56,4],[1,8,6,4,7,9,5,],[1,5,8],[5,89,4,6,3])
    console.log("Union of the arrays - ", dis)
    res.send("Your data is on terminal.")
})
 */

router.get('/test-me', function (req, res) {
    let arr = [["thiller", "Interstaller"], ["comedy", "Liar Liar"], ["fantacy", "Harry Potter"], ["advanture", "RRR"]]
    let dis = _.fromPairs(["hii", "hello"])
    console.log("Your movies list -", dis)
    res.send("Your data is on terminal.")
})


module.exports = router;