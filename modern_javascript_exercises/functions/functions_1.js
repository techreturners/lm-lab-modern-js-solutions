// Instructions can be found in functions.md

// Function Declarations
// logPerson() is a "Function Declaration"
// Note how it uses the "function" keyword at the beginning of it's declaration
// This is the original way of writing functions in JavaScript

const people = ["Harry", "Hermione", "Ron"];

function logPerson(person) {
  console.log("The person is " + person);
}

people.forEach(logPerson);

// Function in a Variable
// Store the logPerson() function in a variable called performLogPerson

// Solution:

const performLogPerson = function (person) {
  console.log("The person is " + person);
};

people.forEach(performLogPerson);

// Arrow Functions
// Write a version of logPerson() as an Arrow Function and store it in a variable called arrowVersionofLogPerson

// Solution:

const arrowVersionOfLogPerson = (person) => console.log("The person is " + person);

people.forEach(arrowVersionOfLogPerson);

// Anonymous Arrow Functions
// Replace logPerson below with an Anonymous Arrow Function that does the same thing

people.forEach((person) => console.log("The person is " + person));
