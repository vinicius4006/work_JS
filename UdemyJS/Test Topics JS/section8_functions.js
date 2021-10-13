/*
//Challenge 1
function isValidPassword(password, username){
    if(password.length < 8 || password.includes(" ") || password.includes(username))
        return false
        return true

}

console.log(isValidPassword("dogLuvr123!","dogLuvr"))

//Challenge 2

function avg(array){
    return array.reduce((prevVal, current) => (prevVal + current))/array.length
}


console.log(avg([75,76,80,95,100]))

//Challenge 3
//Solution 1
function isPangram(str){
    //let str2 = str.toLowerCase()
    for (let char of "abcdefghijklmnopqrstuvwxyz")
        if (str.toLowerCase().indexOf(char) === -1)
                return false
    
     return true
}
console.log(isPangram("The five boxing wizards jump quickly"))

//Solution 2
//console.log(new Set("The five boxing wizards jump quick".toLowerCase().replace(/[^a-z]/g, "").split("")).size === 26)

//Challenge 4
let cardGame = [
  
]
function getCard(){
    const value = [1,2,3,4,5,6,7,8,9,10,"J","Q","K"]
    const suit = ["Clubs","Spades","Hearts","Diamonds"]
    let aleatoryValue = value[Math.floor(Math.random()*(value.length))]
    let aleatorySuit = suit[Math.floor(Math.random()*(suit.length))]
    
    cardGame.valueCard = aleatoryValue
    cardGame.suitCard = aleatorySuit
}
getCard()
console.log(cardGame)
const subtract = function(x,y){
    return x - y
}
function add(x,y){
    return x + y
}
function multiply(x,y){
    return x * y
}

const divide = function(x,y){
    return x / y
}
const operations = [add, subtract, multiply, divide]
const result = []
for(let func of operations)
    result.push(func(30,5)) 
console.log(result)
function multiplyBy(num){
    return function (x){
        return x * num
    }
    
}
const triple = multiplyBy(3)
const double = multiplyBy(2)

console.log(double(10))

function makeBetweenFunc(min,max){
    return function (val){
        return val >= min && val <= max
    }
}
const inAgeRange = makeBetweenFunc(18,100)
console.log(inAgeRange(50))*/

const btn = document.querySelector("button")
btn.addEventListener("click",function(){
    alert("WHY DID YOU CLICK ME??!!")
})