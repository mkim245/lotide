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

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      break;
    }
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1,[1,2,5,7,2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood", ","]);