async function getPeople(){
    const response = await fetch("https://randomuser.me/api/?results=10")

    return response.json()
}

getPeople().then( data =>console.log(data))

getPeople().then(data => {
    const result = data.results.filter(num => Number(num.dob.age) >= 30)
    const people = []
    const people2 = []
    //console.log(result)
    //console.log(result.filter(num => num.gender == "female"))
    
    for (let p of result){
        
        people.push({
            "Nome" : `${p.name.first} ${p.name.last}`,
            "Sexo" : `${p.gender}`,
            "Idade" :  `${p.dob.age}`
        } )
        
        
    }


console.table(people)

}   )