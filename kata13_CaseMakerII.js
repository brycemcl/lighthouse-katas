const makeCase = function (input, cases) {
	let returnString = ''
	const doesStringExistInArray = (array, stringToMatch) => {
		for (string of array) {
			if (string === stringToMatch) {
				return true
			}
		}
		return false
	}
	let arrayOfCases = []
	if (typeof cases === 'object') {
		arrayOfCases = cases
	} else {
		arrayOfCases.push(cases)
	}
	let camelCaseActive = doesStringExistInArray(arrayOfCases, 'camel')
	let pascalCaseActive = doesStringExistInArray(arrayOfCases, 'pascal')
	let snakeCaseActive = doesStringExistInArray(arrayOfCases, 'snake')
	let kebabCaseActive = doesStringExistInArray(arrayOfCases, 'kebab')
	let titleCaseActive = doesStringExistInArray(arrayOfCases, 'title')
	let vowelCaseActive = doesStringExistInArray(arrayOfCases, 'vowel')
	let consonantCaseActive = doesStringExistInArray(arrayOfCases, 'consonant')
	let upperCaseActive = doesStringExistInArray(arrayOfCases, 'upper')
	let lowerCaseActive = doesStringExistInArray(arrayOfCases, 'lower')
	let camelCase = (string) => {
		if (!camelCaseActive) {
			return string
		}
		let stringToReturn = ''
		let previousLetterSpace = false
		//checks if the previous letter is a space then decides if it is uppercase or lowercase
		for (letter of input) {
			if (!(letter === ' ') && previousLetterSpace === true) {
				stringToReturn += letter.toUpperCase()
			} else if (!(letter === ' ') && previousLetterSpace === false) {
				stringToReturn += letter.toLowerCase()
			}
			//sets if the next letter is going to be uppercase
			if (letter === ' ') {
				previousLetterSpace = true
			} else {
				previousLetterSpace = false
			}
		}
		return stringToReturn
	}
	let pascalCase = (string) => {
		if (!pascalCaseActive) {
			return string
		}
		let stringToReturn = ''
		let previousLetterSpace = true
		//checks if the previous letter is a space then decides if it is uppercase or lowercase
		for (letter of input) {
			if (!(letter === ' ') && previousLetterSpace === true) {
				stringToReturn += letter.toUpperCase()
			} else if (!(letter === ' ') && previousLetterSpace === false) {
				stringToReturn += letter.toLowerCase()
			}
			//sets if the next letter is going to be uppercase
			if (letter === ' ') {
				previousLetterSpace = true
			} else {
				previousLetterSpace = false
			}
		}
		return stringToReturn
	}
	let snakeCase = (string) => {
		if (!snakeCaseActive) {
			return string
		}
		let stringToReturn = ''
		for (letter of input) {
			if (letter === ' ') {
				stringToReturn += '_'
			} else {
				stringToReturn += letter
			}
		}
		return stringToReturn
	}
	let kebabCase = (string) => {
		if (!kebabCaseActive) {
			return string
		}
		let stringToReturn = ''
		for (letter of input) {
			if (letter === ' ') {
				stringToReturn += '-'
			} else {
				stringToReturn += letter
			}
		}
		return stringToReturn
	}
	let titleCase = (string) => {
		if (!titleCaseActive) {
			return string
		}
		let stringToReturn = ''
		let previousLetterSpace = true
		//checks if the previous letter is a space then decides if it is uppercase or lowercase
		for (letter of input) {
			if (!(letter === ' ') && previousLetterSpace === true) {
				stringToReturn += letter.toUpperCase()
			} else if (!(letter === ' ') && previousLetterSpace === false) {
				stringToReturn += letter.toLowerCase()
			} else {
				stringToReturn += letter
			}
			//sets if the next letter is going to be uppercase
			if (letter === ' ') {
				previousLetterSpace = true
			} else {
				previousLetterSpace = false
			}
		}
		return stringToReturn
	}
	let vowelCase = (string) => {
		if (!vowelCaseActive) {
			return string
		}
		let returnString = ''
		for (letter of string) {
			if (/[aeiou]/.test(letter)) {
				returnString += letter.toUpperCase()
			} else {
				returnString += letter.toLowerCase()
			}
		}
		return returnString
	}
	let consonantCase = (string) => {
		if (!consonantCaseActive) {
			return string
		}
		let returnString = ''
		for (letter of string) {
			if (/[aeiou]/.test(letter)) {
				returnString += letter.toLowerCase()
			} else {
				returnString += letter.toUpperCase()
			}
		}
		return returnString
	}
	let upperCase = (string) => {
		if (!upperCaseActive) {
			return string
		}
		return string.toUpperCase()
	}
	let lowerCase = (string) => {
		if (!lowerCaseActive) {
			return string
		}
		return string.toLowerCase()
	}
	return lowerCase(
		upperCase(
			consonantCase(
				vowelCase(titleCase(kebabCase(snakeCase(pascalCase(camelCase(input))))))
			)
		)
	)
}

console.log(makeCase('this is a string', 'camel'))
console.log(makeCase('this is a string', 'pascal'))
console.log(makeCase('this is a string', 'snake'))
console.log(makeCase('this is a string', 'kebab'))
console.log(makeCase('this is a string', 'title'))
console.log(makeCase('this is a string', 'vowel'))
console.log(makeCase('this is a string', 'consonant'))
console.log(makeCase('this is a string', ['upper', 'snake']))

//For testing
//console.log(makeCase('this is a string', 'camel') === "thisIsAString")
//console.log(makeCase('this is a string', 'pascal') === "ThisIsAString")
//console.log(makeCase('this is a string', 'snake') === "this_is_a_string")
//console.log(makeCase('this is a string', 'kebab') === "this-is-a-string")
//console.log(makeCase('this is a string', 'title') === "This Is A String")
//console.log(makeCase('this is a string', 'vowel') === "thIs Is A strIng")
//console.log(makeCase('this is a string', 'consonant') === "THiS iS a STRiNG")
//console.log(makeCase('this is a string', ['upper', 'snake']) === "THIS_IS_A_STRING")
