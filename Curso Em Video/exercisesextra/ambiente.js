/*
num = [1,2,3]
myAlphabetLength(num)
function myAlphabetLength(a){
    if(a.length < 4){
        console.log("Abaixo de 4 elementos")
    }else{

    console.log(`${a.length}`)
    }
}

checkFunc("false",true)
function checkFunc(str,boo){
    if (typeof str === "string" && typeof boo === "boolean"){
        console.log("Parâmetros aceitos")
    }else{
        console.log(`Não corresponde ${str} - ${boo}`)
    }

}
let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"]
for (let pos in planets){
    console.log(`Planet[${Number(pos)+1}]: ${planets[pos]}`)
}
let student1Courses = ["Math", "English", "Programming"]


for (let pos in student1Courses){
    console.log(student1Courses[pos] + ` - ${student1Courses[pos].split("")}`)

}

*/
let c1 = [1,2,3]
let c2 = [2,5,8]

for(let pos in c1){
    for(let spos in c2){
        if (c1[pos === c2[spos]]){
            console.log("ok")
        }
    }
}