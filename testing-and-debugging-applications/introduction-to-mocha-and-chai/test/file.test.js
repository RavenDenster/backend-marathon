const { sum, divide } = require('../file.js');

describe('add функция', () => {
  it('должна возвращать правильную сумму', async () => {
    const { expect } = await import('chai');
    
    expect(sum(5, 10)).to.equal(15);
    expect(sum(3, 7)).to.equal(10);
    expect(sum('5', 10)).to.equal('a должно быть числом');
  });
});

describe('divide функция', () => {
  it('должна возвращать правильную частное', async () => {
    const { expect } = await import('chai');
    
    expect(divide(10, 2)).to.equal(5);
    expect(divide(100, 4)).to.equal(25);
    expect(divide(10, 0)).to.equal('делить на ноль нельзя');
  });
});