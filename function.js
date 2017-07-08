function isBiggerThan24 (num) {
	return num > 24
}

const test = isBiggerThan24(22)
console.log(test)


// function name should always be clear and related to the command
function plus22 (num) {
	return num + 22
}

const test2 = plus22(34)
console.log(test2)


// Make a scissors paper stone game
// 2 player
// Make a function that shows who wins

function scissorsPaperStone (p1choice, p2choice) {
	//if (p1 === scissors and p2 === paper) // p1 wins
	//if (p1 === scissors and p2 === rock) //p2 wins

	//return winner

	if (p1choice === 'scissors' && p2choice === 'paper'){
		return 'player 1'
	} else if (p1choice === 'scissors' && p2choice === 'rock') {
		return 'player 2'
	} else if (p1choice === 'scissors' && p2choice === 'scissors') {
		return 'tie'
	} else if (p1choice === 'paper' && p2choice === 'paper') {
		return 'tie'
	} else if (p1choice === 'paper' && p2choice === 'rock') {
		return 'player 1'
	} else if (p1choice === 'paper' && p2choice === 'scissors') {
		return 'player 2'
	} else if (p1choice === 'rock' && p2choice === 'scissors') {
		return 'player 1'
	} else if (p1choice === 'rock' && p2choice === 'paper') {
		return 'player 2'
	} else if (p1choice === 'rock' && p2choice === 'rock') {
		return 'tie'
	}
}

const p1choice = 'rock'
const p2choice = 'rock'

console.log(scissorsPaperStone('scissors', 'paper'))
console.log(scissorsPaperStone('scissors', 'rock'))
console.log(scissorsPaperStone('scissors', 'scissors'))
console.log(scissorsPaperStone('paper', 'scissors'))
console.log(scissorsPaperStone('paper', 'rock'))
console.log(scissorsPaperStone('paper', 'paper'))
console.log(scissorsPaperStone('rock', 'rock'))
console.log(scissorsPaperStone('rock', 'paper'))
console.log(scissorsPaperStone('rock', 'scissors'))


