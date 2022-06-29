const words = ["hello", "world", "lighthouse"];
const without = function(source, itemsToremove) {
  let remain = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToremove.includes(source[i]))
      remain.push(source[i]);
  }
  return remain;
};

const assertArraysEqual = function(left, right) {
  if (left[0] === right[0] && left[1] === right[1] && left[2] === right[2])
    console.log(`🔵🔵🔵 Assertion Passed: [${left}] === [${right}]`);
  else console.log(`🔴🔴🔴 Assertion Failed: [${left}] !== [${right}]`);
};

assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world", "lighthouse"]);
