const printDate = function () {
    console.log(Date())
}

const printMonth = function () {
    let a = new Date()
    console.log(a.getMonth())
}

const getBatchInfo = function (batch, week, day, topic) {
    console.log(`${batch},W${week}D${day}, the topic for tody is ${topic}.`)
}

module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo