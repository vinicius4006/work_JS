/* Impossible Button Demo
const btn = document.querySelector("button")

btn.addEventListener("mouseover", () => {
    console.log("MOUSED OVER ME!")
    const height = Math.floor(Math.random() * window.innerHeight)
    const width = Math.floor(Math.random() * window.innerWidth)
    btn.style.left = `${width}px`
    btn.style.top = `${height}px`

})

btn.addEventListener("click", () => {
    btn.innerText = "YOU GOT ME!"
    document.body.style.backgroundColor = "green"
})
const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet"
]

const changeColor = function(){
    const h1 = document.querySelector("h1")
    h1.style.color = this.style.backgroundColor
}

const container = document.querySelector("#boxes")

for (let color of colors){
    const box = document.createElement("div")
    box.style.backgroundColor = color
    box.classList.add("box")
    container.appendChild(box)
    box.addEventListener("click",changeColor)
}
document.body.addEventListener("keypress", e => {
    console.log(e)
})
*/
const input = document.querySelector("#username")

input.addEventListener("keydown", e => {
    console.log("KEY DOWN")
})
input.addEventListener("keyup", e => {
    console.log("KEY UP")
})
input.addEventListener("keypress", e => {
    console.log("KEY PRESS!")
})

const addItemInput = document.querySelector("#addItem")
const itemsUl = document.querySelector("#items")

addItemInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        if (!this.value) return
        const newItemNext = this.value
        const newItem = document.createElement("li")
        newItem.innerText = newItemNext
        itemsUl.appendChild(newItem)
        this.value = ""
    }
})