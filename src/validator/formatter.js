const trim = function (write) {
    console.log("The word is - ", write)
}

const changeToLowerCase = function (write) {
    let a = write.toLowerCase()
    console.log("Lower Case -", a)
}

const changeToUpperCase = function (write) {
    let a = write.toUpperCase()
    console.log("Upper Case -", a)
}


module.exports.trim = trim
module.exports.changeToLowerCase = changeToLowerCase
module.exports.changeToUpperCase = changeToUpperCase