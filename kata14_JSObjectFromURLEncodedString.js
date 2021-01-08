const urlDecode = function(text) {
  let isKey = true; // Or isValue
  let currentKey = '';
  let currentValue = '';
  let returnObject = {};

  for (let index = 0; index < text.length; index++) {
    if (text[index] + text[index + 1] + text[index + 2] === '%20') {
      //handle spaces
      if (isKey) {
        currentKey += ' ';
      } else {
        currentValue += ' ';
      }
      index += 2;
      //switch from key to value
    } else if (text[index] === '=') {
      isKey = false;
      //switch to new key and flush key value pair to object
    } else if (text[index] === '&') {
      isKey = true;
      returnObject[currentKey] = currentValue;
      currentKey = '';
      currentValue = '';
    } else {
      if (isKey) {
        currentKey += text[index];
      } else {
        currentValue += text[index];
      }
    }
  }
  //flush last key value pair to object
  returnObject[currentKey] = currentValue;
  return returnObject;
};

console.log(urlDecode('duck=rubber'));
console.log(urlDecode('bootcamp=Lighthouse%20Labs'));
console.log(urlDecode('city=Vancouver&weather=lots%20of%20rain'));
console.log(urlDecode('city=Vancouver&weather=lots%20of%20rain').weather);
