const camelCase = function(input) {
  let stringToReturn = '';
  let previousLetterSpace = false;
  //checks if the previous letter is a space then decides if it is uppercase or lowercase
  for (let letter of input) {
    if (!(letter === ' ') && previousLetterSpace === true) {
      stringToReturn += letter.toUpperCase();
    } else if (!(letter === ' ') && previousLetterSpace === false) {
      stringToReturn += letter.toLowerCase();
    }
    //sets if the next letter is going to be uppercase
    if (letter === ' ') {
      previousLetterSpace = true;
    } else {
      previousLetterSpace = false;
    }
  }
  return stringToReturn;
};

console.log(camelCase('this is a string'));
console.log(camelCase('loopy lighthouse'));
console.log(camelCase('supercalifragalisticexpialidocious'));
