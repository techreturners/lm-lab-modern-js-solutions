// Instructions can be found in const_vs_let.md

// *Original Code*

function countThePeople() {
  const count = 0;
  let people = ["Barbara", "Jacob", "Angela", "Brangela"];
  people.forEach(() => (count += 1));
  return count;
}

// console.log(countThePeople()); // <---- uncomment me!

// *Solution*

function countThePeople() {
  let count = 0;
  const people = ["Barbara", "Jacob", "Angela", "Brangela"];
  people.forEach(() => (count += 1));
  return count;
}

console.log(countThePeople()); // <---- uncomment me!
