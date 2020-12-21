const conditionalSum = function (values, condition) {
	return sumArray(evenOrOddArray(values, condition))
}
const isNumberEven = (num) => {
	if (!typeof num === 'number') {
		return NaN
	} else if (num % 2 === 0) {
		return true
	} else {
		return false
	}
}

const isTextEven = (text) => {
	if (text === 'even') {
		return true
	} else if (text === 'odd') {
		return false
	} else {
		return 'not even or odd'
	}
}

const evenOrOddArray = (values, condition) => {
	let returnArray = []
	for (currentNumber of values) {
		if (
			isNumberEven(currentNumber) === true &&
			isTextEven(condition) === true
		) {
			returnArray.push(currentNumber)
		} else if (
			isNumberEven(currentNumber) === false &&
			isTextEven(condition) === false
		) {
			returnArray.push(currentNumber)
		}
	}
	return returnArray
}

const sumArray = (arrayOfNumber) => {
	let currentSum = 0
	for (currentNumber of arrayOfNumber) {
		if (typeof currentNumber === 'number') {
			currentSum += currentNumber
		}
	}
	return currentSum
}

console.log(conditionalSum([1, 2, 3, 4, 5], 'even'))
console.log(conditionalSum([1, 2, 3, 4, 5], 'odd'))
console.log(conditionalSum([13, 88, 12, 44, 99], 'even'))
console.log(conditionalSum([], 'odd'))
