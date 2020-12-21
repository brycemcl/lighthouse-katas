const sumLargestNumbers = function (data) {
	const debug = false
	let step = 0
	let largeNumber = -Infinity
	let smallNumber = -Infinity
	for (currentNumber of data) {
		step++
		if (debug) {
			console.table([
				['step', step],
				['smallNumber', smallNumber],
				['largeNumber', largeNumber],
				['currentNumber', currentNumber],
			])
		}

		if (currentNumber > largeNumber) {
			smallNumber = largeNumber
			largeNumber = currentNumber
		} else if (currentNumber > smallNumber) {
			smallNumber = currentNumber
		}
	}
	step++
	currentNumber = NaN
	if (debug) {
		console.table([
			['step', step],
			['smallNumber', smallNumber],
			['largeNumber', largeNumber],
			['currentNumber', currentNumber],
		])
	}
	return largeNumber + smallNumber
}

console.log(sumLargestNumbers([1, 10]))
console.log(sumLargestNumbers([1, 2, 3]))
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]))
