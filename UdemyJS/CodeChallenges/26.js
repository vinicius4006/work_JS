// Create a function that will receive two arrays 
//and will return an array with
//elements that are in the first array but not in the second
const array1 = [1,2,3,4,6,5,98,9,8,7,45,54]
const array2 = [1,2,3,4,6]

const compareArray = (arr1,arr2) => {
    let array3 = []
    for (let item of arr1)
        if(!arr2.includes(item))
            array3.push(item)

            return array3
}


console.log(compareArray(array1,array2))