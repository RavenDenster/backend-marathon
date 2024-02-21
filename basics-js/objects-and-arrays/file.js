const person1 = {
    name: "Oleg",
    age: 19,
    city: "New York"
  };
  
const person2 = {
    name: "Bob",
    age: 10,
    city: "Los Angeles"
};

const person3 = {
    name: "Raven",
    age: 50,
    city: "Sochi"
};
  
// массив объектов
const people = [person1, person2, person3];

console.log(people);

// фильтрация
let filteredPeople = people.filter(person => person.age > 15);
console.log(filteredPeople);

// сортировка
let sortedNumbersAsc = people.sort((a, b) => a.age - b.age);
console.log(sortedNumbersAsc);