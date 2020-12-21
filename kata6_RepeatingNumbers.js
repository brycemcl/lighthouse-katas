const repeatNumbers = function (data) {
	let arrayOfStrings = []
	for (pairOfNumbers of data) {
		arrayOfStrings.push(repeatNumberFromArray(pairOfNumbers))
	}
	return comaSeparatedValues(arrayOfStrings)
}

const comaSeparatedValues = (arrayOfStrings) => {
	let stringToReturn = ''
	for (string of arrayOfStrings) {
		stringToReturn += string + ', '
	}
	stringToReturn = stringToReturn.slice(0, -2)
	return stringToReturn
}

const repeatNumberFromArray = (arrayOfTwoNumbers) => {
	let string = ''
	for (let index = 0; index < arrayOfTwoNumbers[1]; index++) {
		string += arrayOfTwoNumbers[0]
	}
	return string
}

console.log(repeatNumbers([[1, 10]]))
console.log(
	repeatNumbers([
		[1, 2],
		[2, 3],
	])
)
console.log(
	repeatNumbers([
		[10, 4],
		[34, 6],
		[92, 2],
	])
)
