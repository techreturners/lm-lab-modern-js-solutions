// Instructions can be found in const_vs_let.md

let count = 0;

const people = ["Barbara", "Jacob", "Angela", "Brangela"];

function countThePeople() {
  people.forEach(() => (count += 1));
}

countThePeople();

console.log(count); // <---- uncomment me!
