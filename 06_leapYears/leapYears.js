const leapYears = function(date) {
  if ((date % 4 === 0 && date % 100 !== 0) || (date % 400 === 0)) {
    return true
  } else {
    return false
  }
};


leapYears(700);

// Do not edit below this line
module.exports = leapYears;

// - year % 4 = 0 (like 1984 and 2004)
// - year !% 100 = 0 (such as 1800 and 1900)
// - year % 400 = 0 (like 1600 and 2000)
// > notes to self, the last two points contradicts each other, so make sure to put the 400 rule before the 100. 

// leapYears(2000) // is a leap year: returns true
// leapYears(1985) // is not a leap year: returns false