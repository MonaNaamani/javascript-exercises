const repeatString = function(string, num) {
  if (num < 0) {
    return "ERROR"
  };
  stringArray = [];
  for (let i=0 ; i < num; i++) {
  stringArray.push(string);
}
  return stringArray.join('');
};

const number = Math.floor(Math.random() * 1000)

repeatString("hey", number);

// Do not edit below this line
module.exports = repeatString;