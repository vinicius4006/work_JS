//Calculate 10!

const factNumber = num => {
    let res = 1
    for (let pos = 1; pos <= num; pos++)
        res *= pos
    return res
}
console.log(factNumber(5))