const multiplicationTable = function(maxValue) {
  let stringToReturn = "";
  for (let index = 1; index < maxValue + 1; index++) {
    stringToReturn += multiplicationRow(index, maxValue);
  }
  stringToReturn = stringToReturn.slice(0, -1);
  return stringToReturn;
};

const multiplicationRow = (row, length) => {
  let stringToReturn = '';
  for (let index = 1; index < length + 1; index++) {
    stringToReturn += index * row + " ";
  }
  stringToReturn += "\n";
  return stringToReturn;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
