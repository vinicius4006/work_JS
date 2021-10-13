function contar(){
    var res = document.getElementById("res")
    var ini = document.getElementById("ini")
    var fim = document.getElementById("fim")
    var passo = document.getElementById("passo")
    var ini2 = Number(ini.value)
    var fim2 = Number(fim.value)
    var passo2 = Number(passo.value)
     
    if(fim2 > 0 && passo2 > 0){
        res.innerHTML = `Contando`
        if (fim2 > ini2){
    while(ini2 <= fim2){
        res.innerHTML += `${ini2}👉`
        ini2 += passo2
    }} else{
        for(ini2; ini2 >= fim2;ini2 -= passo2){
            res.innerHTML += `${ini2}👉`
        }
    }


    res.innerHTML += `🏁`
    }else{
        alert("CUIDADO COM OS '0'")
    }
    
   
    
}