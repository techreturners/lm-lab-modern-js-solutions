// Instructions can be found in template_literals.md

// *Original function below*

// const greeting = (name, dayOfTheWeek) =>
//   "Hello " + name + "! It is now " + dayOfTheWeek;

// *Solution*

const greeting = (name, dayOfTheWeek) =>
  `Hello ${name}! It is now ${dayOfTheWeek}`;

module.exports = greeting;
