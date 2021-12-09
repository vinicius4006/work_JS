/*
let [primeiro, segundo,...resto] = ["Uva", "Maçã", "Pêra", "Mamão", "Abacate"]
console.log(primeiro);
console.log(segundo);
console.log(resto);  //revisão desestruturando um array


let {tipo, cor, tampas} = {tipo:"Caneta", cor:"azul",marca:"BIC", tampas:["Redonda","quadrada"]};
//desestruturando um objetp
console.log(tipo);
console.log(cor);
console.log(tampas[1])
//revisão
*/
function* BaterLiquidificado(ing){
   for (let item of ing)
    yield item;
}
let ingredientes = BaterLiquidificado(["leite","banana","nescau","aveia"])

let fazerVitamina = setInterval( function(){
        let vitamina = ingredientes.next();
        if (vitamina.done){
            clearInterval(fazerVitamina)
            console.log("Acabou, sua vitamina está pronta")
        } else {
                console.log(vitamina.value)
        }
}, 1000)