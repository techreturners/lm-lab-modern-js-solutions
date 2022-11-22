// Instructions can be found in let_vs_var.md

// Problems with var

function count() {
  let i = 0;
  for (i = 0; i < 5; i++) {
    console.log(i + " inside the forLoop");
  }
  console.log(i + " outside the forLoop");
}

count(); // <---- uncomment me!

// Another problem with var is that we can overwrite it, like this:

let greeting = "Hello 😘";
let greeting2 = "Not today, pal! 😤";

console.log(greeting + " " + greeting2); // <----- uncomment me!
