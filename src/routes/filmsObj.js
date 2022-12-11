let obj = [
    {
        id: 1,
        name: 'Hello Brother'
    },
    {
        id: 2,
        name: 'Batman'
    },
    {
        id: 3,
        name: 'Mask'
    },
    {
        id: 4,
        name: 'Venom'
    },
    {
        id: 5,
        name: 'Mass'
    },
]


let filmId = function (a) {
    let main = []
    for (let i = 0; i < obj.length; i++) {
        if (a == i) {
            main = obj[i]
        }
    }
    return main
}


module.exports.obj = obj
module.exports.filmId = filmIdSS