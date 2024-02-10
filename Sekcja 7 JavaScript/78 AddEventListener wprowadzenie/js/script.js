const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('.btn2')



function ClickButton() {
	console.log('Kliknięto przycisk 1')
}

function Add() {
	console.log(2 + 2)
}


btn1.addEventListener('click', ClickButton)
btn2.addEventListener('click', Add)