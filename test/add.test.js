const expect = require('chai').expect;
const add = require('../commands/add');

describe('addTask', function() {
  let testData = [{
    id: 1,
    desc: 'test',
    isComplete: false
  }];

  it('should give unique ID to each new task', function() {
    let expected = 'Created task 2';
    expect(add('buy milk', testData)).to.equal(expected);
  });

  it('should Not add duplicate task', function() {
    let expected = 'Duplicate task, not added.';
    expect(add('test', testData)).to.equal(expected);
  });
}); //end of function
