//Primitives
//1. String --> anything written with quotation mark ''
console.log('Hello, this is called string')
//2. Number --> numbers without quotation mark
console.log(123.56)
//3. Boolean --> true/false (two values, without quotation mark)
console.log(true)
//4. null
//5. undefined


//naming variables
let greetings = 'hello '
//const --> constant, cannot be changed
//let --> can be redefined
console.log(greetings)

const name = 'nat'

greetings = 'hello ' + 'good morning '
console.log(greetings + name)


//if statement
if (23 > 24) {
	console.log('23 is bigger than 24')
}

if (25 > 24) {
	console.log('25 is bigger than 24')
}

//if else statement with boolean
const isBiggerThan24 = 23 > 24

if (isBiggerThan24) {
	console.log('is bigger')
} else {
	console.log('not bigger than 24')
}

//if else if else
let num = 24

if (num === 23) {
	console.log('equals 23')
} else if (num === 22) {
	console.log('equals 22')
} else {
	console.log('not equal to anything')
}