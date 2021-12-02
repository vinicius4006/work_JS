//Calculate the sum of even numbers greater than 10 and less than 30

const sumEven = (ini,num) => {
    let res = 0
    for (let pos = (ini+1); pos < num; pos++)
        if (pos % 2 === 0)
            res += pos
    return res
}
console.log(sumEven(10,30))