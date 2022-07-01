const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🔵🔵🔵 Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(sentence) {
  const summaryLetter = {};
  for (let letter of sentence) {
    if (letter !== " ") {
      if (summaryLetter[letter]) {
        summaryLetter[letter] += 1;
      } else {
        summaryLetter[letter] = 1;
      }
    }
  }
  return summaryLetter;
};
console.log(countLetters("lighthouse in the house"));
