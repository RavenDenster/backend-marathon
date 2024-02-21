// function declaration
function greet(name) {
    return `Hello, ${name}`;
}

// function definition
let square = function (number) {
    return number * number;
}

// arrow functions
let subtract = (a, b) => {
    return a - b;
};

// nested functions
function addSquares(a, b) {
    function square(x) {
      return x * x;
    }
    return square(a) + square(b);
}

console.log(greet("Oleg"));
console.log(square(5, 3));
console.log(subtract(10, 7)); 
console.log(addSquares(2, 3)); 