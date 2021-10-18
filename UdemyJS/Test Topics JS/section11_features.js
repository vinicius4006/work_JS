//default parameters
//spread
/*
let spread = "GOAT"
console.log(...spread)

//spread in Object Literals
const feline = {
    legs: 4,
    family: "Felidae"
}
const canine = {
    family: "Caninae",
    furry: true
}
const dog = {
    ...canine,
    isPet: true,
    adorable: true
}

const houseCat = {
    ...feline,
    isGrumpy: true,
    personality: "unpredictable"
}
const catDog = {
    ...canine,
    ...feline
}
const catDogClone = {
    ...catDog
}

function sum(){
    const argsArr = [...arguments]
    return argsArr.reduce((total,currVal) => {
        return total + currVal
    },0)
    //arguments não é uma coisa
}
const res = sum(5,2,3)
//console.log(res)
//rest

function sum2(...nums){
    return nums.reduce((total,currVal) => {
        return total + currVal
    } )
}
const res2 = sum2(80,80,40)
//console.log(res2)
const multiply = (...nums) => (
    nums.reduce((total,currVal) => total * currVal)
)
//destructuring Arrays

const raceResults = [
    "Eliud Kipchoge",
    "Feyisa Lelissa",
    "Galen Rupp",
    "Ghirmay Ghebreslassie",
    "Alphonce Simbu",
    "Jared Ward"
]
const [silver,gold,bronze] = raceResults
const [first, , , fourth] = raceResults // a "," pula a posição
const [winner, ...others] = raceResults
console.log(others)

//Destructuring Objects
const runner = {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
    title: "Elder of the Order of the Golden Heart of Kenya"
}
const {country: nation, title: honorific} = runner
// Quando isto acontece, ele irá procurar a key que eu coloquei no const
// Ou você desestrutura por key ou pelo nome da propriedade

console.log(honorific)

//Nested Destructuring
const results = [{
    first : "Eliud",
    last: "Kipchoge",
    country: "Kenya"
},
    {
        first: "Feyisa",
        last: "Lilesa",
        country: "Ethiopia"
    },
    {
        first: "Galen",
        last: "Rupp",
        country: "United States"
    }

]
const [,silverMedal] = results
const {country} = silverMedal

console.log(country)
*/
//Destructuring Parameters
const runner = {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
    title: "Elder of the Order of the Golden Heart of Kenya"
}
function print({first,last,title}){
    console.log(`${first} ${last}, ${title}`)
}
print(runner)