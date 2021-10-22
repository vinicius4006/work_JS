// Create a function that will 
//convert an array containing ASCII codes in a string

const arrayConver = txt => {
    return txt.map(str => String.fromCharCode(str)).join("")
}
console.log(arrayConver([113,42,38]))