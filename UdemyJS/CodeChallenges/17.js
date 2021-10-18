//Calculate the sum of digits of a positive integer number
const sumPos = num => {
    return num.filter(num => {
        if(num > 0 && num % 1 === 0)
            return num
    }).reduce((prevVal,curVal) => prevVal + curVal)
}
console.log(sumPos([1,2,2,3,-9,8.65,7.98]))