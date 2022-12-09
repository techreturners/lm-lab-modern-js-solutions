// Instructions can be found in ternaries.md

// *Original function below*

// export function sayHello(name) {
//   if (name === undefined) {
//     return "Hello you!";
//   } else return "Hello, " + name + "!";
// }

// *Solution*

export function sayHello(name) {
  return !name ? "Hello you!" : "Hello, " + name + "!";
}

// Or using a modern js arrow function with implicit return

export const sayHello = (name) =>
  !name ? "Hello you!" : "Hello, " + name + "!";


// Note: this could also be solved using a default parameter:

const sayHello = (name = "you") => "Hello, " + name + "!";
