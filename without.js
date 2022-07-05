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
  
const words = ["hello", "world", "lighthouse"];
const without = function(source, itemsToremove) {
  let remain = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToremove.includes(source[i]))
      remain.push(source[i]);
  }
  return remain;
};

// assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world", "lighthouse"]);
