//Find the maximum number in an array of numbers
const maxNumber = num => {
    let order = num.sort((a,b) => a - b)
    return order[order.length-1]
}
console.log(maxNumber([60,200,3,7]))
