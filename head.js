const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🔵🔵🔵 Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

let head = function(arr) {
    if (Array.isArray(arr)) {
        return arr[0];
    } else return undefined;
}

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = head;