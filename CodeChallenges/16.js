//Create a function that will return a Boolean specifying if a number is prime
const booleanPrime = num =>{
    let count = []
    if(num > 1){ 
        for (let pos = 1; pos <= num; pos++)
            if (num%pos === 0)
            count.push(pos)
        }  else return console.log("#######")
    if (count.length != 2)
        return false
    else return true
}
console.log(booleanPrime())