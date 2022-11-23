// Instructions can be found in destructuring_arrays.md

// *Original function below*

// export function sequence(order) {
//   const first = order[0];
//   const second = order[1];
//   const third = order[2];

//   return first + ", " + second + ", " + third;
// }

// *Solution*

//prettier-ignore
export function sequence([first, second, third]) { // <--- 2) destructuring moved up into the parameters 🔥 🔥
  
  // const [first, second, third] = order; <--- 1) destructuring 🔥

  return first + ", " + second + ", " + third;
}
