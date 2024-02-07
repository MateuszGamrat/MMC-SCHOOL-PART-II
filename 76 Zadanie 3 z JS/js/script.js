const numbers = ['1', '2', '3', '4', '5', '6']

for (let i = 0; i < numbers.length; i++) {
	console.log(numbers[i])
}

function count(arg1, arg2, arg3) {
	console.log(arg1 + arg2 * arg3)
}

count(1, 2, 3)

if (numbers.length > 5) {
	console.log('True')
} else {
	console.log('False')
}


console.log(`Tablica z cyframi ma ${numbers.length} elementów`)
