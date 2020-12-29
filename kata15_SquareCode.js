const squareCode = function (message) {
	let returnArray = []
	let currentColumn = 0
	let messageWithoutSpaces = message.replace(/ /g, "")
	let rowSize = Math.ceil(Math.sqrt(messageWithoutSpaces.length))
	for (character of messageWithoutSpaces) {
		returnArray[currentColumn] ? returnArray[currentColumn] += character :	returnArray[currentColumn] = character
		currentColumn++
		if (rowSize === currentColumn) {
			currentColumn = 0
		}
	}
	return returnArray.join(" ")
}

console.log(squareCode('chill out'))
console.log(squareCode('feed the dog'))
console.log(squareCode('have a nice day'))
console.log(
	squareCode(
		'if man was meant to stay on the ground god would have given us roots'
	)
)

console.log(squareCode('chill out') === 'clu hlt io')
console.log(squareCode('feed the dog') === 'fto ehg ee dd')
console.log(squareCode('have a nice day') === 'hae and via ecy')
console.log(
	squareCode(
		'if man was meant to stay on the ground god would have given us roots'
	) === 'imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau'
)