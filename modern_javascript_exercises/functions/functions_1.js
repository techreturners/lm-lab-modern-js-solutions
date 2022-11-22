// Instructions can be found in functions.md

// Function Declarations
// logPerson() is a "Function Declaration"
// Note how it uses the "function" keyword at the beginning of it's declaration
// This is the original way of writing functions in JavaScript

// Note: Named Functions can be passed as values, as shown. But written in different ways..

const people = ["Harry", "Hermione", "Ron"];

// function logPerson(person) {
//   console.log("The person is " + person);
// }

// people.forEach(logPerson);

// Function Expressions/Functions as a Value
// Refactor logPerson() so it is becomes a Function Expression (or sometimes called a "Function as a Value")

const logPerson = function (person) {
  return "The person is " + person;
};

people.forEach(logPerson);

// Your code here

// Anonymous Functions
// Refactor logPerson() so it becomes an Anonymous Function

const logPerson2 = (person) => {
  return "The person is " + person;
};

people.forEach(logPerson2);
// Your code here

// Anonymous Arrow Functions
// Refactor logPerson() so it becomes a Anonymous Arrow Function

const logPerson3 = (person) => console.log("The person is " + person);
// Your code here
