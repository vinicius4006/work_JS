const testPrime = num =>{
    let add = []
     if(num > 1){ 
        for (let pos = 1; pos <= num; pos++)
       if (num%pos === 0)
       add.push(pos)
    if(add.length == 2){
       return true
   }
   }
    }
    
const printPrimeBetween = (start,end) => {
    let count = new Array()
    for (let pos = start; pos <= end; pos++ )
        if (testPrime(pos))
            count.push(pos)
    return count
}
console.log(printPrimeBetween(10,100))