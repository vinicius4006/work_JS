let array = []
let v = document.querySelector("input#analisador")
let sel = document.querySelector("select#adc")
let res = document.querySelector("div#res")
function adicionar(){
    res.innerHTML = ""
   
    if (Number(v.value) <= 100 && Number(v.value) != 0){
        let item = document.createElement("option")
            item.text = `O valor ${v.value} foi adicionado`
            array.push(v.value)
            return sel.appendChild(item)  
        } else return alert("Número inválido ou campo vazio")  
}

function finalizar(){
    if(array.length == 0)
        return alert("Campo vazio")   
    res.innerHTML = 
    `<p>Ao todo, temos <strong>${array.length}</strong> números cadastrados.</p>
    <p>O maior valor informado é o <strong>${(array.sort((a,b) => a - b)).slice(array.length-1,array.length)}</strong>
    <p>Somando todos os valores temos <strong>${array.reduce((prevVal, current) => Number(prevVal) + Number(current))}</strong></p>
    <p>A média dos valores é <strong>${(array.reduce((prevVal, current) => Number(prevVal) + Number(current)))/array.length}</strong></p>
    `
}

function refresh(){
    let adc = document.querySelector("select#adc")
    adc.innerHTML = ``
    res.innerHTML = ""
    array = []
}