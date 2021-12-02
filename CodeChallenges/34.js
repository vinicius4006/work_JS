//Create a function that returns an array with words inside a text. 
const wordArray = str => {
    if(str.includes(" ")){
         return str.replace(" ","").split("")
        }
        
}

console.log(wordArray("All Might"))