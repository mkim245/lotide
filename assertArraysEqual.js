const assertArraysEqual = function(left, right) {
  if (left[0] === right[0] && left[1] === right[1] && left[2] === right[2])
    console.log(`🔵🔵🔵 Assertion Passed: [${left}] === [${right}]`);
  else console.log(`🔴🔴🔴 Assertion Failed: [${left}] !== [${right}]`);
};