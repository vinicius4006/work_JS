//Print the distance between the first 100 prime numbers
const testPrime = num => {
    for (let key=2; key < num; key++)
        if(num % key === 0)
            return false
        return num > 1
}
const distancePrime = num => {
    let array3 = []
    for(let pos = 2; pos <= num; pos++)
        if(testPrime(pos)){
            array3.push(pos)
        }
    for(let key = 1; key < array3.length; key++)
         console.log(`${array3[key-1]} - ${array3[key]} = ${array3[key] - array3[key-1]}`)
}
distancePrime(100)