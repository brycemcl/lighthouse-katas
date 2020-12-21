var prompt = require('prompt-sync')()
const numberToGuess = Math.floor(Math.random() * 100)
let pastGuesses = {}
let currentGuess = 0
let numberOfGuess = 0
while (!(numberToGuess === currentGuess)) {
	let uiGuess = Number(prompt('Guess a number: '))
	if (pastGuesses[uiGuess] === true) {
		console.log('Already Guessed!')
	} else if (Object.is(NaN, uiGuess)) {
		console.log('Not a number! Try again!')
	} else {
		numberOfGuess++
		pastGuesses[uiGuess] = true
		currentGuess = uiGuess
		if (currentGuess > numberToGuess) {
			console.log('Too High!')
		} else if (currentGuess < numberToGuess) {
			console.log('Too Low!')
		}
	}
}

console.log(
	`You answered: ${currentGuess} \n You got it! You took ${numberOfGuess} attempts!`
)
