const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [] for [5]", () => {
    assert.deepEqual(middle([5]), []);
  });
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns '1, 7' for [5, 6, 1, 7, 8, 9]", () => {
    assert.deepEqual(middle([5, 6, 1, 7, 8, 9]), [1, 7]);
  });
});