const add = function(a,b) {return (a + b)};

add(2, 6);

const subtract = function(a,b) {return (a - b)};

subtract(10, 4);

const sum = function(array) {
  totalSum = 0;
  for (i=0 ; i < (array.length) ; i++) {
  totalSum += array[i];  
  }
  return totalSum
};

sum([1, 3, 5, 7, 9]);

const multiply = function(array) {
  totalMult = 1;
  for ( let i = 0 ; i < (array.length) ; i++) {
  totalMult *= array[i];  
  }
  return totalMult
};

multiply([2, 4, 6, 8, 10, 12, 14]);

const power = function(a,b) {return Math.pow(a, b)};

power(4, 3);

const factorial = function(a) {
  let totalFac = 1;
  for ( let i = a ; i > 0; i--) {
  totalFac *= i;
}	
  return totalFac
};

factorial(10);




// const factorial = function(a) {
//   let totalFac = 1;
//   for ( i=a ; i < 1; i--) {
//   totalFac *= i;
// }	
// };

// factorial(0);





// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
