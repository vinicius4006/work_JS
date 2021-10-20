//Create a function that will merge two arrays and return the result as a new array 
const array1 = ["My name" ," is"]
const array2 = [" Barry"," Allen"]

const mergeArray = (str,txt) => {
    return str.concat(txt)
}
console.log(mergeArray(array1,array2))