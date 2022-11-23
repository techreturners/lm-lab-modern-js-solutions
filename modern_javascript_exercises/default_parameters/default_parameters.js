// Instructions can be found in default_parameters.md

// *Original function below*

// export const sayHello = (person) => {
//   return `Hello, ${person === undefined ? "you!" : person + "!"}`;
// };

// *Solution*

export const sayHello = (person = "you") => `Hello, ${person + "!"}`;
