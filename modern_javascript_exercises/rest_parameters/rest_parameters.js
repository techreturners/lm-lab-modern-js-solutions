// Instructions can be found in rest_parameters.md

function add(...args) {
  // Add a loop here

  let total = 0;
  for (const a of args) {
    total += a;
  }
  return total;
}

console.log(add(1, 2, 3, 4, 5));

module.exports = add;
