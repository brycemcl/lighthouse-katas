const squareCode = function (message) {
	let returnString = ''
	let column = 0
	let rowSize = findRowSize(removeSpacesFromString(message))
	let messageWithoutSpaces = removeSpacesFromString(message)
	let tempArray = []
	for (character of messageWithoutSpaces) {
		if (tempArray[column]) {
			tempArray[column] += character
		} else {
			tempArray[column] = character
		}

		column++
		if (rowSize === column) {
			column = 0
		}
	}
	for (currentCurrent of tempArray) {
		returnString += currentCurrent + ' '
	}
	returnString = returnString.slice(0, -1)
	return returnString
}
const removeSpacesFromString = (string) => {
	let returnString = ''
	for (character of string) {
		if (!(character === ' ')) {
			returnString += character
		}
	}
	return returnString
}
const findRowSize = (string) => {
	return Math.ceil(Math.sqrt(string.length))
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