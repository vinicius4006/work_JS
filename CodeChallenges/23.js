// Reverse a string 
const string = "HELLO"
const reverseString = str => {
    let txt = str.split("")
    return txt.reverse().join("")
}
console.log(reverseString(string))