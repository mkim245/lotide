const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🔵🔵🔵 Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false