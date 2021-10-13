
let num = [1,2,3,4,5,6,9,7,7,7,7,7,7,7,7,78]
/*
for(let a = 0;a < num.length; a++){
console.log(num[a])
}
for (let pos in num){
    console.log(num[pos])
}*/
let pos = num.indexOf(63)
if(pos === -1){
    console.log("Not found, try again")
}else{
    console.log(`Position: ${pos}`)
}