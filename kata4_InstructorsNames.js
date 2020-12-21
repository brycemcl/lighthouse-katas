const instructorWithLongestName = function (instructors) {
	let longestName = [-Infinity, -Infinity]
	for (let index = 0; index < instructors.length; index++) {
		if (instructors[index].name.length > longestName[0]) {
			longestName = [instructors[index].name.length, index]
		}
	}
	return instructors[longestName[1]]
}

console.log(
	instructorWithLongestName([
		{ name: 'Samuel', course: 'iOS' },
		{ name: 'Jeremiah', course: 'Web' },
		{ name: 'Ophilia', course: 'Web' },
		{ name: 'Donald', course: 'Web' },
	])
)
console.log(
	instructorWithLongestName([
		{ name: 'Matthew', course: 'Web' },
		{ name: 'David', course: 'iOS' },
		{ name: 'Domascus', course: 'Web' },
	])
)
