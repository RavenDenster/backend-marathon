// Условные операторы
let age = 18;

if (age >= 18) {
  console.log("too much");
} else {
  console.log("too few");
}

let day = "Saturday";

switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  default:
    console.log("It's another day");
}

// Циклы
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let fruits = ["apple", "banana", "orange"];

fruits.forEach(fruit => {
  console.log(fruit);
});

// Функция, вызывающая ошибку
function throwError() {
  throw new Error("Something went wrong!");
}

// Обработка ошибки с помощью блока try/catch
try {
  throwError();
} catch (error) {
  console.error(error.message);
}