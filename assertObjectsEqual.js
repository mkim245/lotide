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

const eqObjects = function(object1, object2) {
  let result = true;
  const arrayFirst = Object.keys(object1);
  const arraySecond = Object.keys(object2);
  if (arrayFirst.length !== arraySecond.length) result = false;
  else for (let key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      result = result && (eqArrays(object1[key], object2[key]));
    }
    if (object1[key] !== object2[key]) result = false;
  }
  return result;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) console.log(`🔵🔵🔵 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  else console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};