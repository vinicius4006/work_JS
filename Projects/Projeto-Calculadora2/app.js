const visor1 = document.querySelector("#visor1")
const visor2 = document.querySelector("#visor2")
let v1 = 0;
let v2 = 0;
let result = 0;
let id;
function num(item){
    visor1.innerHTML += item;
}

function clearNums(){
    visor1.innerHTML = ""
    visor2.innerHTML = ""
}
function ponto() {
    visor1.innerHTML += "." 
}

function changeSignal(){
    if (visor1.innerHTML > 0)
        visor1.innerHTML = -visor1.innerHTML
    else
        visor1.innerHTML = visor1.innerHTML * (-1)  
        
}

function perc(){
    console.log("Até hoje nunca entendi!")
}

function opBasico(numCode){
    v1 = Number(visor1.innerHTML)
    id = numCode
    visor2.innerHTML = numCode == 123 ? v1+"÷" : numCode == 321 ? v1+"x" : numCode == 654 ? v1+"-": numCode == 456 ? v1+"+" : v1
    visor1.innerHTML = ""
}

function res(){
    v2 = Number(visor1.innerHTML)
    switch (id){
        case 123:
            visor1.innerHTML = `${(v1/v2).toPrecision(3)}`
            break;
        case 321:
            visor1.innerHTML = `${v1*v2}`
            break;
        case 654:
            visor1.innerHTML = `${v1-v2}`
            break;
        case 456:
            visor1.innerHTML = `${v1+v2}`
            break;
        
    }
}