const convertToCelsius = function(fahrenheit) {
  return +((fahrenheit - 32) * (5/9)).toFixed(1); 
};

const convertToFahrenheit = function(celcuis) {
  return +((celcuis * (9/5)) + 32).toFixed(1);
};


convertToCelsius(-100);
convertToFahrenheit(-10);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};


// find the formula to get 1 decimal number

// (0°C × 9/5) + 32 = 32°F
// (32°F − 32) × 5/9 = 0°C
// 12.333333.toFixed(1);