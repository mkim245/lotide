const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 'Lighthouse', 'Labs' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns [6] for the length of [5, 6]", () => {
    assert.deepEqual(tail([5, 6]), [6]);
  });
});