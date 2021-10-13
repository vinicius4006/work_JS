function salarioAjuste(){
    let num = document.querySelector("input#salario")
    let salario = Number(num.value)
    let res = document.querySelector("div#res")
    let ano = document.querySelector("select#ano")
    let a = document.querySelector("select#newSalario")
    

    if (num.value.length != 0 && salario > 0){
        a.innerHTML = ""
        if(Number(ano.value) == 2010){ 
            let item = document.createElement("option")
            item.text = `${parseInt(salario)} -> `
            item.text += `${parseInt(salario*1.015)} -> `
            item.text += `${parseInt(salario*1.015)*1.03}`
            newSalario.appendChild(item)
            
        }else if(Number(ano.value) == 2011){
            let item = document.createElement("option")
            item.text = `${parseInt(salario)} -> `
            item.text += `${parseInt(salario*1.015)}`
            newSalario.appendChild(item)
        }else{
            let item = document.createElement("option")
            item.text = `${salario}`
            newSalario.appendChild(item)
        }
    }else{
        alert("Preste atenção!")
    }


}