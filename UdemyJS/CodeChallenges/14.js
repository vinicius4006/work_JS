//Print the first 10 Fibonacci numbers without recursion
const sFibonacci = num => {
    let sFibo = [0,1]
    let sFiboCal = []
    for (let pos = 0; pos <= num; pos++){
        if (sFibo[pos] !== undefined)
            sFiboCal.push(sFibo[pos])
            else
            sFiboCal.push(sFiboCal[sFiboCal.length-1]+sFiboCal[sFiboCal.length-2])
        }
        return sFiboCal          
}

console.log(sFibonacci(20))