// Instructions can be found in default_parameters.md

// *Original function below*

// const sayHello = (person) => {
//   return `Hello, ${person === undefined ? "you!" : person + "!"}`;
// };

// *Solution*

const sayHello = (person = "you") => `Hello, ${person + "!"}`;

module.exports = sayHello;
