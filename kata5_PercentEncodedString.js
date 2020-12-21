const urlEncode = function (text) {
	let url = '';
	for (character of text.trim()) {
		if (isCharacterSpace(character)) {
			url += '%20';
		} else {
			url += character;
		}
	}
	return url;
};

const isCharacterSpace = (character) => {
	//use a regular expression to test for if character is a space
	return /[ ]/.test(character);
};

console.log(urlEncode('Lighthouse Labs'));
console.log(urlEncode(' Lighthouse Labs '));
console.log(urlEncode('blue is greener than purple for sure'));
