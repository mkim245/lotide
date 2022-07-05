const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🔵🔵🔵 Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(sentence) {
  const summaryLetter = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] != " ") {
        if (summaryLetter[sentence[i]]) {
          summaryLetter[sentence[i]] += 1;
        } else {
          summaryLetter[sentence[i]] = 1;
      }
    }
  }
  return summaryLetter;
};
// console.log(countLetters("lighthouse in the house"));