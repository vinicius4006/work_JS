function carregar(){
var msg = window.document.getElementById("msg")
var img = window.document.getElementById("imagem")
var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()

msg.innerHTML = `Agora são ${hora}:${minuto}`

if(hora >= 0 && hora < 12){
    img.src = "/12ex/modelo014/fotomanha.png"
    document.body.style.background = "#ffdaa3"
}else if(hora >= 12 && hora < 18) {
    img.src = "/12ex/modelo014/fototarde.png"
    document.body.style.background = "#6c5e43"
}else {
    img.src = "/12ex/modelo014/fotonoite.png"
    document.body.style.background = "#025a63"
}


}