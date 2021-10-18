//Calculate the average of the numbers in an array of numbers
const avgArray = num => num.reduce((prevVal, curVal) => prevVal + curVal)/num.length
console.log(avgArray([1,2,3,4,5,6,7,8,9,10]))