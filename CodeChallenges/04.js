//Print all the multiplication tables with numbers from 1 to 10
function allTable(){
    for (let pos = 1; pos <= 10; pos++)
        for (let key = 0; key <= 10; key++)
            console.log(`${pos}x${key} = ${pos*key}`)
}
allTable()