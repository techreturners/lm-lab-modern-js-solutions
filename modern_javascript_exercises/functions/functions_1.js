// Instructions can be found in functions.md

// Function Declarations
// logPerson() is a "Function Declaration"
// Note how it uses the "function" keyword at the beginning of it's declaration
// This is the original way of writing functions in JavaScript

// Note: Named Functions can be passed as values, as shown. But written in different ways..

// *Original function below*
const people = ["Harry", "Hermione", "Ron"];

// function logPerson(person) {
//   console.log("The person is " + person);
// }

// people.forEach(logPerson);

// *Solutions*

// Function Expressions/Functions as a Value
// Refactor logPerson() so it is becomes a Function Expression (or sometimes called a "Function as a Value")
// Your code here

const logPerson = function (person) {
  console.log("The person is " + person);
};

people.forEach(logPerson);

// Anonymous Functions
// Refactor logPerson() so it becomes an Anonymous Function
// Your code here

const logPerson2 = (person) => {
  console.log("The person is " + person);
};

people.forEach(logPerson2);

// OR even better

const logPerson3 = (person) => console.log("The person is " + person); // <--- here we are using console.log() so its not as obvious, but by removing the curly braces and moving this onto one line, it now has an "implicit" return, meaning you don't need to use the "return" keyword

people.forEach(logPerson3);

// Anonymous Arrow Functions
// Refactor logPerson() so it becomes a Anonymous Arrow Function
// Your code here

// This function is anonymous, it does not have a name
people.forEach((person) => console.log("The person is " + person));
