function sum(a, b) {
    if (typeof a === 'string') {
        return 'a должно быть числом';
    }
    return a + b;
}

function divide(a, b) {
    if (b == 0) return 'делить на ноль нельзя';
    return a / b;
}
  
module.exports = { sum, divide };
