const sumAll = function(a,b) {
  let sumAll = 0;
  let newArray = [];
  let min = 0;
  let max = 0;
  
  if ( a < 0 || b < 0) {
    return "ERROR"
  } else if ( typeof a === 'string' || typeof b === 'string') {
    return "ERROR"
  } else if(Array.isArray(a) === true || Array.isArray(b) === true ) {
    return "ERROR"
  } else if(!Number.isInteger(a) || !Number.isInteger(b)) {
    return "ERROR"
  }

  if (a>b) {
    min = b;
    max = a;
  } else if (a<b) {
    min = a;
    max = b;
  }
  for (let i = min; i < max+1; i++) {
    newArray.push(i);
  }
  for (let j = 0; j < newArray.length ; j++) {
    sumAll += newArray[j];
  }
  return sumAll
};

sumAll(10, [90, 1]);

module.exports = sumAll;