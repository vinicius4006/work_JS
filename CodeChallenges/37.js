// Create a function that will convert a string 
//in an array containing the ASCII codes of 
//each character

const arrayASCII = txt => {
    return txt.split("").map(str => str.charCodeAt())
}
console.log(arrayASCII("qual"))