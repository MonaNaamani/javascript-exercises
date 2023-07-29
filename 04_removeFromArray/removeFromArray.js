const removeFromArray = function(data, ...theArgs) {
    let indexNum = 0;
    for (const arg of theArgs) {
    indexNum = data.indexOf(arg);
    if (indexNum != -1) data.splice(indexNum, 1);
    }
    return data
};


removeFromArray(([1, 2, 3], "1", 3));

// Do not edit below this line
module.exports = removeFromArray;