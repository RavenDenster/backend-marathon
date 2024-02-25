const { sum, divide } = require('./file');
  
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
  
test('divide 6 / 3 to equal 2', () => {
    expect(divide(6, 3)).toBe(2);
});
  