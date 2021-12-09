//título
// Botão de Start
// Botão de STOP
// Botão de Reset
//telinha pra ver o tempo rodando
const time = document.querySelector("#time");
let intervalTemp;
let minutes = 0;
let seconds = 0;
let ms = 0;
//let ms = 59000;
/*
ms++;
        minutes = parseInt(seconds/60);
        seconds = parseInt(ms/1000);
            seconds = seconds < 10 ? "0" + seconds : seconds;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            time.textContent = minutes + ":" + seconds;


             intervalTemp = setInterval(() => {
        let ms;
        ms = data.getMilliseconds()
        console.log(ms)
    }, 1)
*/


function btnStart(){
   
    intervalTemp = setInterval(() => {
        ms++;        
        if (ms == 400){
            ms = 0
            seconds++
            if ( seconds == 60){
                seconds = 0
                minutes++
            }
        }
        let format = (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds) + ":" + (parseInt(ms/10) < 10 ? "0" + parseInt(ms/10) : parseInt(ms/10))
        time.textContent = format
    }, 1);
    
    
}
function btnStop(){
    clearInterval(intervalTemp)
}

function btnReset(){
    btnStop()
    time.innerText = `00:00:00`
     minutes = 0;
     seconds = 0;
     ms = 0;
}

