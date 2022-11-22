// Instructions can be found in ternaries.md

// *Original function below*
// function sayHello(name) {
//   if (name === undefined) {
//     return "Hello you!";
//   } else return "Hello, " + name + "!";
// }

function sayHello(name) {
  return !name ? "Hello you!" : "Hello, " + name + "!";
}

module.exports = sayHello;
