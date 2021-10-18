//Create a function that receives an array of numbers as argument and returns an  array containing only the positive numbers
const array = [1,2,3,-5,-9,8]

const arrayPositive = num => num.filter(item => {
    if(item > 0) return item
})
console.log(arrayPositive(array))