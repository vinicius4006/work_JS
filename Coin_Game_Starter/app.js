function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const avatar = document.querySelector('#player')
const coin = document.querySelector("#coin")
const result = document.querySelector(".result")
let count = 0

window.addEventListener("keyup", function(e){
	if(e.key === "ArrowDown" || e.key === "Down"){
		moveVertical(avatar, 50)
	}
	else if(e.key === "ArrowUp" || e.key === "Up"){
		moveVertical(avatar, -50)
	} 
	else if(e.key === "ArrowRight" || e.key === "Right"){
		avatar.style.transform = "scale(1,1)"
		moveHorizontal(avatar, -50)
	} 
	else if(e.key === "ArrowLeft" || e.key === "Left"){
		avatar.style.transform = "scale(-1,1)"
		moveHorizontal(avatar, 50)
	}
	if (isTouching(avatar, coin)){ 
		if (count == 3){
		 window.alert("3 PONTOS")
		return document.location.reload(true)
		}
		 

		count++
		result.innerText = `${count}`
		moveCoin()
	}
})
const moveVertical = (element, amount) => {
	const currentTop = extractPos(element.style.top);
	element.style.top = `${currentTop + amount}px`
}
const moveHorizontal = (element, amount) => {
	const currentLeft = extractPos(element.style.left)
	element.style.left = `${currentLeft - amount}px`
}
const extractPos = (pos="0px") => {
	if (!pos) return 100;
	return parseInt(pos.slice(0,-2))
}

const moveCoin = () => {
	const x = Math.floor(Math.random() * window.innerWidth)
	const y = Math.floor(Math.random() * window.innerHeight)
	coin.style.top = `${y}px`
	coin.style.left = `${x}px`
}

moveCoin()
