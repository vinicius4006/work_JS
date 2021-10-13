function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("ano")
    var res = document.querySelector("div#res")
    var img = document.createElement("img")
    img.setAttribute("id","foto")
    if(fano.value.length == 0 || fano.value > ano){
        alert("Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("escolha")
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada ${idade}`
        var genero = ""
        if (fsex[0].checked){
            genero = "Homem"
            if(idade >= 0 && idade < 10){
                img.setAttribute("src","/12ex/modelo015/homemcrianca.png")
            }else if(idade < 21){
                img.setAttribute("src","/12ex/modelo015/homemjovem.png")
            }else if(idade < 50){
                img.setAttribute("src","/12ex/modelo015/homemjovem.png")
            }else {
                img.setAttribute("src","/12ex/modelo015/homemidoso.png")
            }
        }else {
            genero = "Mulher"
            if(idade >= 0 && idade < 10){
                img.setAttribute("src","/12ex/modelo015/mulhercrianca.png")
            }else if(idade < 21){
                img.setAttribute("src","/12ex/modelo015/mulherjovem.png")
            }else if(idade < 50){
                img.setAttribute("src","/12ex/modelo015/mulherjovem.png")
            }else {
                img.setAttribute("src","/12ex/modelo015/mulheridosa.png")
                
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
