const express = require('express');
const router = express.Router();
const _ = require('underscore')
const req = require('express/lib/request');
const { route } = require('express/lib/application');

/* 
router.get("/sol1", function (req, res) {
    let arr= [1,2,3,4,5,7]
    let missingNumber = 0
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
        let n = arr.length + 1
        let m = n * (n + 1) / 2
        missingNumber = m - sum
    }
     
    res.send(  { data: missingNumber  }  );

 */

router.get("/sol2", function (req, res) {
    let arr = [33, 34, 35, 36, 37, 38, 40]
    let missingNumber = 0

    for (let i = 0; i < arr.length; i++) {

        if (arr[i + 1] - arr[i] === 2) {
            missingNumber = arr[i] + 1
        }

    }


    res.send({ data: missingNumber });
});


module.exports = router;