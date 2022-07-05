const eqArrays = function(left, right) {
  let matchingCount = 0;
  if (left.length >= right.length) {
    for (let i = 0; i < left.length; i++) {
      if (left[i] === right[i]) matchingCount += 1;
    }
    if (matchingCount === left.length) return true;
    else return false;
  } else return false;
};
    
const assertArraysEqual = function(left, right) {
  if (eqArrays(left, right) === true) console.log(`🔵🔵🔵 Assertion Passed: [${left}] === [${right}]`);
  else console.log(`🔴🔴🔴 Assertion Failed: [${left}] !== [${right}]`);
};
  
const middle = function(input) {
  let middleNumber = [];
  if (input.length <= 2) return middleNumber;
  if (input.length % 2 === 1) {
    middleNumber.push(input[Math.round(input.length / 2) - 1]);
  }
  if (input.length % 2 === 0) {
    middleNumber.push(input[(input.length / 2) - 1]);
    middleNumber.push(input[input.length / 2]);
  }
  return middleNumber;
};
 
middle([7, 3]);


// console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
// console.log(assertArraysEqual(middle([1, 2, 3]), [5]));

module.exports = middle;