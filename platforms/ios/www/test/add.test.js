var expect = require('chai').expect;
var add    = require('../js/add.js');

describe('add()', function() {
  it('returns 2 when you pass it 1, 1', function() {
    expect(add(1, 1)).to.equal(2);
  });
});
