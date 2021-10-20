// Create a function that will receive two arrays 
//and will return an array with
//elements that are in the first array but not in the second
const array1 = [1,2,3,4]
const array2 = [1,7,4,8,2]

const mergeFirst = (num1,num2) => {
    let array3 = num1.concat(num2)
    return [...new Set(array3)]
    }
const compareMerge = num => {
    let array3 = []
     num.filter(item => {
        while(array2.includes(item))
            array3.push(item)
    })
   return array3
}

console.log(compareMerge(mergeFirst(array1,array2)))