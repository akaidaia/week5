// If you have 4 apples and 6 oranges. Then you buy 3 apples. Do you have more than 7 apples?
// If you have more than 7 apples, say yes
// Otherwise say no

let apples = 4
let oranges = 6

if (apples + 3 > 7) {
	console.log('yes')
} else {
	console.log('no')
}


// You bought a birthday cake
// and decide to split the cake equally into 7 pieces.
// But you discovered that,
// after giving away a slice of cake to each of your family members,
// you have 3 pieces left over.
// You didn't take a piece of cake for yourself

// How many people are there?

//hardcoding actually, not recommended
// const cake = 7

// cake = 7 - 3

// console.log('there are ' + cake + ' people')

//another answer
const slices = 7
const remainingSlices = 3
const peopleInRoomExceptMe = slices - remainingSlices
const peopleInRoom = remainingSlices + 1

console.log(peopleInRoom)


// Zell is 29 years old
// Make an if else statement that checks your age againts zell's
// If you are younger than zell, say 'I am younger than zell'
// If you are older than zell, say 'I am older than zell'
// If you are the same age as zell, say 'I am the same age as zell'
// Bonus if you can include your age in your message
// without hardcoding your age in console log

const zell = 29
const thisYear = 2017
const yearIWasBorn = 1994
const myAge = thisYear - yearIWasBorn
const yearAWasBorn = 1980
const yearBWasBorn = 29
const aAge = thisYear - yearAWasBorn
const bAge = thisYear - yearBWasBorn

if (zell > myAge) {
	console.log('I am ' + myAge +', therefore younger than zell')
} else if (zell < myAge) {
	console.log('I am ' + myAge +', therefore older than zell')
} else {
	console.log('I am ' + myAge +', therefore the same age as zell')
}

if (zell > aAge) {
	console.log('A is ' + aAge +', therefore younger than zell')
} else if (zell < myAge) {
	console.log('A is ' + aAge +', therefore older than zell')
} else {
	console.log('A is ' + aAge +', therefore the same age as zell')
}




