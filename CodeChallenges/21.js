// Rotate an array to the right 1 position 
var ar = [1,2,3,4,5,6,7]
const rotateRight = (num,x) =>{
    for(let pos=0;pos<x;pos++){
    let last = ar.pop()
    ar.unshift(last)}
    return ar
}
console.log(rotateRight(ar,3))

