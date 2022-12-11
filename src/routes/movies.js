let arr = ['Hello Brother', 'Batman', 'Mask', 'Venom', 'Mass']

let index = function (a) {
    let main = []
    for (let i = 0; i < arr.length; i++) {
        if (a == i) {
            main = arr[i]
        }else
        {
            return "Invalid index number"
        } 
    } 
    return main
}


module.exports.arr = arr
module.exports.index = index