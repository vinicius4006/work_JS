//querySelector("section ul li.special") exemplo
const allLis = document.querySelectorAll("li")

for (let item in allLis)
    allLis[item].innerText = "WE ARE THE CHAMPIONS!"

for (let elem of allLis)
    elem.innerHTML = "We are <b>THE CHAMPIONS</br>"