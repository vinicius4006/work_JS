// Implement the Caesar cypher

const caesarCypher = txt => {
    const plain = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const cipher = "XYZABCDEFGHIJKLMNOPQRSTUVW"
    const textArray = txt.toUpperCase().split(" ")
   const newText = textArray.map(str => {  
        return str.split("").map(swap => cipher[plain.indexOf(swap)])
        
   }).join(" ").replace(/,/g,"")
   return newText
}

console.log(caesarCypher("I LOVE JAVASCRIPT"))