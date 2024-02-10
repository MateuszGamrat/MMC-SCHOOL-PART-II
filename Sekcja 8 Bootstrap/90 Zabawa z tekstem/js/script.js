const sizeUp = document.querySelector('.size-up')
const sizeDown = document.querySelector('.size-down')
const color = document.querySelector('.color')
const p = document.querySelector('p')

let fontSize = 20

function bigText() {
	fontSize += 5
	p.style.fontSize = fontSize + 'px'
}

function lowwerText() {
	fontSize -= 5
	p.style.fontSize = fontSize + 'px'
}

function goldColor() {
	p.style.color = 'gold';
}

sizeUp.addEventListener('click', bigText)
sizeDown.addEventListener('click', lowwerText)
color.addEventListener('click', goldColor)
