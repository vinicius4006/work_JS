// Create a function that will receive an array of numbers as argument 
//and will return a 
//new array with distinct elements 
const array1 = [1,2,3,3,4,5,6,9,9,8]

const distinctNumbers = num =>{
    return [...new Set(array1)]

}
console.log(distinctNumbers(array1))