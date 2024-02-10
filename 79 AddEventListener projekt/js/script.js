const btn1 = document.querySelector('#btn1')

const btn2 = document.querySelector('.btn2')

const btn3 = document.querySelector('.remove-color')

const divColor = document.querySelector('.color')


function redColor(){
	// divColor.classList.add('red')
	// divColor.classList.remove('blue')

	divColor.classList.toggle('red')
}

function blueColor(){
	divColor.classList.add('blue')
	divColor.classList.remove('red')
}

function deleteColor(){
	divColor.classList.remove('red')
	divColor.classList.remove('blue')
}


btn1.addEventListener('click',redColor)
btn2.addEventListener('click',blueColor)
btn3.addEventListener('click', deleteColor)