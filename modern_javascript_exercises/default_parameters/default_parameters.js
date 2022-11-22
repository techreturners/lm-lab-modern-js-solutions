// Instructions can be found in default_parameters.md

// *Original function below*

// const sayHello = (person) => {
//   return `Hello, ${person === undefined ? "you!" : person + "!"}`;
// };

const sayHello = (person = "you") => {
  return `Hello, ${person + "!"}`;
};

module.exports = sayHello;
