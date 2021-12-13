const btn = document.querySelector(".btn");
const music = new Audio("mpthreetest.mp3");
btn.addEventListener("click",() => {
    music.play();
})