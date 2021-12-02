//Print the first 10 Fibonacci numbers using recursion
const sFibonacci = num => {
    let sFibo = [0,1]
    let sFiboCal = []
    for (let termo = 0; termo <= num; termo++){
        if (sFibo[termo] !== undefined)
            sFiboCal.push(sFibo[termo])
            else
            sFiboCal.push(sFiboCal[sFiboCal.length-1]+sFiboCal[sFiboCal.length-2])
        }
        return sFiboCal          
}

console.log(sFibonacci(0))