// Rotate an array to the right 1 position 
var ar = [1,2,3,5,6,7]
const rotateRight = num =>{
let last = ar.pop()
    ar.unshift(last)
    return ar
}
console.log(rotateRight(ar))

