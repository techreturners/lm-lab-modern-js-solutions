// Instructions can be found in let_vs_var.md

// Problems with var

// *Original function*

// function count() {
//   for (var i = 0; i < 5; i++) {
//     console.log(i + " inside the forLoop");
//   }
//   console.log(i + " outside the forLoop");
// }

// *Solution*

function count() {
  for (let i = 0; i < 5; i++) {
    console.log(i + " inside the forLoop");
  }
  console.log(i + " outside the forLoop");
}

count(); // <---- uncomment me! This results in a ReferenceError (i outside the forLoop is not defined) which is what we want!

// *Original code*

// Another problem with var is that we can overwrite it, like this:

// var greeting = "Hello 😘";
// var greeting = "Not today, pal! 😤";

// console.log(greeting) // <----- uncomment me!

// *Solution*

let greeting = "Hello 😘";
let greeting = "Not today, pal! 😤";

console.log(greeting); // <----- uncomment me! This results in a Helpful Syntax Error ('greeting' has already been declared) which is what we want!
