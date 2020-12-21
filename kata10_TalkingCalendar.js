const talkingCalendar = function (date) {
	const dateArray = slashSeparatedDate(date)
	return (
		numberToMonth(dateArray[1]) +
		numberToDay(dateArray[2]) +
		numberToYear(dateArray[0])
	)
}
const slashSeparatedDate = (string) => {
	let year = ''
	let month = ''
	let day = ''
	let yearDone = false
	let monthDone = false
	for (character of string) {
		if (!yearDone) {
			//year
			if (character === '/') {
				yearDone = true
			} else {
				year += character
			}
		} else if (!monthDone) {
			//month
			if (character === '/') {
				monthDone = true
			} else {
				month += character
			}
		} else {
			//day
			day += character
		}
	}
	year = +year
	month = +month
	day = +day
	return [year, month, day]
}

const numberToDay = (number) => {
	let stringToReturn
	switch (number) {
		case 1:
			stringToReturn = '1st, '
			break
		case 2:
			stringToReturn = '2nd, '
			break
		case 3:
			stringToReturn = '3rd, '
			break
		default:
			stringToReturn = `${number}th, `
			break
	}
	return stringToReturn
}
const numberToMonth = (number) => {
	let stringToReturn
	switch (number) {
		case 1:
			stringToReturn = 'January '
			break
		case 2:
			stringToReturn = 'February '
			break
		case 3:
			stringToReturn = 'March '
			break
		case 4:
			stringToReturn = 'April '
			break
		case 5:
			stringToReturn = 'May '
			break
		case 6:
			stringToReturn = 'June '
			break
		case 7:
			stringToReturn = 'July '
			break
		case 8:
			stringToReturn = 'August '
			break
		case 9:
			stringToReturn = 'September '
			break
		case 10:
			stringToReturn = 'October '
			break
		case 11:
			stringToReturn = 'November '
			break
		case 12:
			stringToReturn = 'December '
			break
	}
	return stringToReturn
}

const numberToYear = (number) => {
	return number
}

console.log(talkingCalendar('2017/12/02'))
console.log(talkingCalendar('2007/11/11'))
console.log(talkingCalendar('1987/08/24'))
