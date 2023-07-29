const sumAll = function(a,b) {
  let sumAll = 0;
  let newArray = [];
  let c = 0;
  let d = 0;
  
  if ( a < 0 || b < 0) {
    return "ERROR"
  } else if ( typeof a === 'string' || typeof b === 'string') {
    return "ERROR"
  } else if(Array.isArray(a) === true || Array.isArray(b) === true ) {
    return "ERROR"
  } else if (a>b) {
    c = b;
    d = a;
  } else if (a<b) {
    c = a;
    d = b;
  }
  for (let i = c; i < d+1; i++) {
    newArray.push(i)
    console.log(newArray)
  }
  for (let j = 0; j < newArray.length ; j++) {
    sumAll += newArray[j];
  }
  return sumAll
};

sumAll(1, 4);

module.exports = sumAll;