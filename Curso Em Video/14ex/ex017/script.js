function tabuada(){
    //tab.innerHTML = ""
    let tab = document.querySelector("select#seltab")
    let valor = document.querySelector("input#num")
    let num = Number(valor.value)

    if(valor.value.length !== 0){
        tab.innerHTML = ""
    for(let n = 0; n <= 10; n++){
        let item = document.createElement('option')
        item.text = `${num} x ${n} = ${num*n}`
        item.value = `tab${n}`
        tab.appendChild(item)
        //tab.innerHTML += `${num} x ${n} = ${num*n}<br />`
    }}else{
        alert("Por favor digite o número")
    }
}   