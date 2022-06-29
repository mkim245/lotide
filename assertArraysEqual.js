const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`🔵🔵🔵 Assertion Passed: ${actual} === ${expected}`);
    } else console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  };
   
  const eqArrays = function(left, right) {
    // if (left[0] === right[0] && left[1] === right[1] && left[2] === right[2]) return true;
    // else return false;
    if (left[0] === right[0] && left[1] === right[1] && left[2] === right[2]) 
    console.log(`🔵🔵🔵 Assertion Passed: [${left}] === [${right}]`);
    else console.log(`🔴🔴🔴 Assertion Failed: [${left}] !== [${right}]`);
  };
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
  assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);