const express = require('express');
const router = express.Router();


let players =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ],
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ],
        },
    ]

router.post('/players', function (req, res) {

    let body = req.body
    let playerDetails = players.find(player => player.name === body.name)

    if (playerDetails) {
        return res.send('player already exist')
    } else {
        players.push(body)
        return res.send(players)
    }

    res.send({ data: players, status: true })
})

module.exports = router;