//querySelector("section ul li.special") exemplo
/*const allLis = document.querySelectorAll("li")

for (let item in allLis)
    allLis[item].innerText = "WE ARE THE CHAMPIONS!"

for (let elem of allLis)
    elem.innerHTML = "We are <b>THE CHAMPIONS</br>"
    
   const allLis = document.querySelectorAll("li")
   const colors = ["red","orange","yellow","green","blue","purple"]

   allLis.forEach((li, i) => {
       li.style.color = colors[i]
   })*/
   //const todo = document.querySelector("#todos .todo")

//todo.style.color = "gray"
//todo.style.textDecoration = "line-through"
const newImg = document.createElement("img")
newImg.src = "https://images.pexels.com/photos/1729196/pexels-photo-1729196.jpeg?cs=srgb&dl=pexels-swapnil-sharma-1729196.jpg&fm=jpg"
document.body.appendChild(newImg)
newImg.style.width = "300px"

const newLink = document.createElement("a")
newLink.innerText = "Mr. Bubz Video! CLICK MEE"
newLink.href = "https://www.youtube.com/watch?v=80YabA6DwHI"

const firstP = document.querySelector("p")
firstP.appendChild(newLink)
