let animationAlter = false

var timesClicked = 0

const faces = document.getElementsByClassName("cube")

const cube = document.getElementById("cube")
const bgcube = document.getElementById("bg-cube")
const counter = document.getElementById("count")
	
cube.addEventListener("click", pulsate)
	
function pulsate() {
	incrementCount()

	if(animationAlter) {
		bgcube.classList.remove("pulseAnimate2")
		bgcube.classList.add("pulseAnimate")

		cube.classList.remove("pulseAnimate2")
		cube.classList.add("pulseAnimate")
		animationAlter = false
	} else {
		bgcube.classList.remove("pulseAnimate")
		bgcube.classList.add("pulseAnimate2")

		cube.classList.remove("pulseAnimate")
		cube.classList.add("pulseAnimate2")
		animationAlter = true
	}
}

function incrementCount() {
	timesClicked++

	counter.innerHTML = timesClicked
}