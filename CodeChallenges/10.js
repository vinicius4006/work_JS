//Calculate the sum of numbers in an array of numbers
const sumArray = num => num.reduce((prevVal, curVal) => prevVal + curVal)
console.log(sumArray([1,2,3,4,5,6,7,8,9,10]))