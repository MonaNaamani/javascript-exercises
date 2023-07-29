const removeFromArray = function(data, ...theArgs) {
  function checkCondition() {

  }
    // for (const arg of theArgs) {
    // }
  
  return data.filter(checkCondition)
};

removeFromArray([1, 2, 3, 4], 3);


//  splice(targetElementIndex, 1)




// Do not edit below this line
module.exports = removeFromArray;

let a = [1, 2, 3, 4, 3];
let targetNumber = 3;

let indexArray = a.map((element, index) => {
  if (element === targetNumber) {
    return index;
  } else {
    return null;
  }
});

indexArray = [null, null, 2, null, 4]


console.log(indicesWithNulls);