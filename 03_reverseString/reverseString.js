const reverseString = function(word) {
  stringArray = [];
  string = word;
  stringLength = string.length;
    num = 1;
  for ( i= stringLength ; i > 0; i-- ) {
    stringArray.push(string.at(-num++))
  }
  return stringArray.join('');

};
reverseString('');

// Do not edit below this line
module.exports = reverseString;

