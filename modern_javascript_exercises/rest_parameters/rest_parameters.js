// Instructions can be found in rest_parameters.md

// *Original Code*

// export function add(a, b) {
// Add a loop here
//   return a + b;
// }

// add(1, 2, 3, 4, 5);

// *Solutions*

export function add(...args) {
  let total = 0;
  for (const a of args) {
    total += a;
  }
  return total;
}

// console.log(add(1, 2, 3, 4, 5));

export function add(...args) {
  let total = 0;
  for (let i = 0; i <= args.length; i++) {
    total += i;
  }
  return total;
}

// console.log(add(1, 2, 3, 4, 5));

export function add(...args) {
  let total = 0;
  args.forEach((arg) => (total += arg));

  return total;
}

// console.log(add(1, 2, 3, 4, 5));
