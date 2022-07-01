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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results1, ["g", "c", "t", "c", "t"]);