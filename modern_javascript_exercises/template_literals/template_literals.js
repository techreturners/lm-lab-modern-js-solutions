// Instructions can be found in template_literals.md

// *Original function below*
// const greeting = (name, dayOfTheWeek) =>
//   "Hello " + name + "! It is now " + dayOfTheWeek;

const greeting = (name, dayOfTheWeek) =>
  `Hello ${name}! It is now ${dayOfTheWeek}`;

module.exports = greeting;
