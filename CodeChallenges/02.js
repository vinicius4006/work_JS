//Print the odd numbers less than 100

oddNumbers = num => {
    for(let pos = 1; pos < num; pos++){ 
    pos % 2 !== 0 ? console.log(pos) : console.log("-")
}}
oddNumbers(100) 

