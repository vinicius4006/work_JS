//Calculate the sum of first 100 prime numbers and return them in an array

const testPrime = num => {
    for (let key=2; key < num; key++)
        if(num % key === 0)
            return false
        return num > 1
}

const sumPrime = num => {
    let sum = 0 
    for(let pos = 1; pos <= num; pos++)
        if(testPrime(pos))
            sum += pos
    return sum

}
console.log(sumPrime(100))