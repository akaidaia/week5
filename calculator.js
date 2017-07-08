// Make a calculator that takes in only two values.
// It is going to take in a third value
// that determines whether you
// add, subtract, multiply or divide the two values

// Build calculate
function calculate(num1, num2, method) {
	if (method === 'add' ) {
		return num1 + num2
	} else if (method === 'subtract') {
		return num1 - num2
	} else if (method === 'multiply') {
		return num1 * num2
	} else if (method === 'divide') {
		return num1 / num2
	}

}

console.log(calculate(-22, 4, 'add'))
console.log(calculate(22, 6, 'add')) 
console.log(calculate(10, 3, 'subtract'))
console.log(calculate(3, 10, 'subtract'))
console.log(calculate(2, 4, 'multiply'))
console.log(calculate(4, 2, 'divide'))
console.log(calculate(8, 16, 'divide'))
console.log(calculate(22, 7, 'divide'))






