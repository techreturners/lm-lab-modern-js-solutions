// Instructions can be found in ternaries.md

// *Original function below*

// export function sayHello(name) {
//   if (name === undefined) {
//     return "Hello you!";
//   } else return "Hello, " + name + "!";
// }

// *Solution*

function sayHello(name) {
  return `Hello, ${name ? name : 'you'}!`
}


