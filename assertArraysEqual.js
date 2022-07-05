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

module.exports = assertArraysEqual;

