const arrowIcon = document.querySelector('.fas')
const btnArrow = document.querySelector('.arrow')
const hideImage = document.querySelector('.item1')

function AddShow() {
	hideImage.classList.toggle('show')

	if (hideImage.classList.contains('show')) {

		arrowIcon.style.rotate = '180deg'
	} else {

		arrowIcon.style.rotate = '0deg'
	}
}

btnArrow.addEventListener('click', AddShow)
