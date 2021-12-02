// Rotate an array to the left 1 position 
let array = [1,2,3,4,5,6,7,8,9,10]

const rotateLeft = num => {
    let count = array.shift()
    array.push(count)

    return array
}
console.log(rotateLeft(array))