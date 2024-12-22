const { add } = require('../src/add');

describe('add function', () => {
  test('should return the sum of two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
});
