//Create a function that will receive 
//two arrays of numbers as arguments and
//return an array composed of all the numbers 
//that are either in the first array
//or second array but not in both 
//[1,2,3] -> [4,5,3] = [1,2,4,5]

const array1 = [1,2,3,4]
const array2 = [1,7,4,8,2]

const mergeExclusive = (num1,num2) => {
    let array3 = num1.concat(num2)
    return [...new Set(array3)]
}
 console.log(mergeExclusive(array1,array2))