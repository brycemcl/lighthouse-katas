const numberOfVowels = function(data) {
  let tempNumberOfVowels = 0;
  for (let letter of data) {
    if (isLetterVowel(letter)) {
      tempNumberOfVowels++;
    }
  }
  return tempNumberOfVowels;
};

const isLetterVowel = (letter) => {
  //use a regular expression to test for if letter is a vowel
  return /[aeiou]/.test(letter);
};

console.log(numberOfVowels('orange'));
console.log(numberOfVowels('lighthouse labs'));
console.log(numberOfVowels('aeiou'));
