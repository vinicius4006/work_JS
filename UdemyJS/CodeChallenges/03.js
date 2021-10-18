//Print the multiplication table with 7
function multiply(num){
for (let pos = 0; pos <= 10; pos++)
    console.log(`${num}x${pos} = ${num*pos}`)
}
multiply(7)