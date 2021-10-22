/*
const getStats = (arr) => {
    const max = Math.max(...reviews)
    const min = Math.min(...reviews)
    const sum = reviews.reduce((sum,r) => sum + r)
    const avg = sum / reviews.length

    return {
        max,
        min,
        sum,
        avg
    }
}

const reviews = [4.5,5.0,3.44,2.8,3.5,4.0,3.5]

const stats = getStats(reviews) 
console.log(stats)
const role = "host"
const person = "Jools Holland"
const role2 = "Director"
const person2 = "James Cameron"

const team = {
    [role]: person,
    [role2]: person2
}
const addProp = (obj, k, v) => {
    return{
        ...obj,
        [k]: v
    }
}
//const addProp = (obj, k, v) => ({...obj,[k]:v}) mais enxuto
console.log(addProp(team,"face",":)"))

//funções podem ser propriedades
const math = {
    multiply: (x,y) => x * y,
    divide: (x,y) => x / y,
    square: (x) => x * x
}
console.log(math.square(6))

const  auth = {
    username: "TommyBot",
    login(){
        console.log("LOGGED YOU IN!")
    },
    logout(){
        console.log("GOODBYE")
    }
}
console.log(auth)*/
const person = {
    first: "Cherilyn",
    last: "Sarkisian",
    nickName: "Cher",
    fullName(){
        const {
            first,
            last,
            nickName
        } = this
        return `${first} ${last} AKA ${nickName}`
    },
    printBio(){ //usar esse em vez de arrow
        console.log(this)
        const fullName = this.fullName()
        return  console.log(`${fullName} is a person!`)
    },//the value of THIS depends on the invocation context the function it is used in
    laugh: () => { // com arrow ele aponta para o window, por isso usar a opção acima
        console.log(this)
    }
}
person.laugh()