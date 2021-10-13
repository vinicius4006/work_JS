/*function fatorial(n){
    let fat = 1
    for (let pos = n; pos > 1; pos--)
        fat *= pos
    return fat

}*/
function fatorial(n){
    if(n == 1)
        return 1
    return n * fatorial(n-1)
}

console.log(fatorial(10))
