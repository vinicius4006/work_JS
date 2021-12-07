//AJAX vai definir que dados vão ser enviados pelo servidor e seus métodos(get, post e etc)
//ele retorna uma resposta do servidor
//---------------
//JSON é uma formatação utilizada para estruturar dados em formato de texto e transmiti-los de um sistema para outro
//alternativa mais leve comparado ao XML
/*
function reqListener () {
    console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://www.example.org/example.txt");
oReq.send();
//respondeText -> utiliza o aqr json, mostra o conteúdo
const firstReq = new XMLHttpRequest();
firstReq.addEventListener("load", () => {
    console.log("IT WORKED!!!");
    const data = JSON.parse(firstReq.responseText);
    const filmURL = data.results[0].films[0];
    const filmReq = new XMLHttpRequest();
    filmReq.addEventListener("load", function(){
        console.log("Second Request Worked!!!");
        const filmData = JSON.parse(this.responseText);
        console.log(filmData)
    });
    filmReq.addEventListener("error", function(e){
        console.log("ERROR!!", e);
    });
    filmReq.open("GET", filmURL);
    filmReq.send()
    //for(let planet of data.results)
        //console.log(planet.name);
    console.log(data.results[0].films[0]);
})
firstReq.addEventListener("error", () => {
    console.log("ERROR!!!");
})

firstReq.open("GET", "https://swapi.dev/api/planets/");// método open inicializa uma nova requisição
firstReq.send();//envia uma requisição para o servidor----------// Eu abro a requisição e envio para o servidor

console.log("Request Sent!"
)*/
fetch("https://swapi.dev/api/planetsuy/")
.then((response) => {
    if(!response.ok)
        throw new Error (`Status Code Error: ${response.status}`);
        
    response.json().then((data) => {
        for(let planet of data.results)
            console.log(planet.name)
    });
})
.catch((err) => {
    console.log("ERROR")
    console.log(err)
});


