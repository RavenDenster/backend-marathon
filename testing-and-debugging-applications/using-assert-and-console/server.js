const assert = require('assert');

function divide(a, b) {
    assert(b !== 0, 'Division by zero is not allowed');
    return a / b;
}

try {
    console.log(divide(10, 2));
    console.log(divide(10, 0)); 
} catch (error) {
    console.error(error.message);
}
