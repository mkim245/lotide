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


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      results[sentence[i]] ? results[sentence[i]].push(i) : results[sentence[i]] = [i];
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello Toronto").e, [1]);
assertArraysEqual(letterPositions("hello Toronto").o, [5]);