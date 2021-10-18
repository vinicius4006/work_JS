//Calculate the sum of numbers from 1 to 10

 const sumNumber = num => {
    let res = 0
    for (let pos = 0; pos <= num; pos++)
        res += pos
    return res
}
console.log(sumNumber(10))