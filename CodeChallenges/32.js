// Create a function that will capitalize 
//the first letter of each word in a text

const capiFirst = txt => {
    let ini = []
    for (let item of txt.split(" "))
        ini.push( item.substr(0,1))
    return ini
}

console.log(capiFirst("Legalmente, isso não deveria acontecer"))