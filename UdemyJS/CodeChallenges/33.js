// Calculate the sum of numbers received in a comma delimited string
const sumNumbers = item => {
    return item.split("").reduce((prevVal,curVal) => {
       return Number(prevVal) + Number(curVal)
    })

}
console.log(sumNumbers("123"))