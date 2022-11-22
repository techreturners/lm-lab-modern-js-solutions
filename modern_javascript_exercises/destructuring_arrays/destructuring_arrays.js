// Instructions can be found in destructuring_arrays.md

// *Original function below*

// function sequence(order) {
//   const first = order[0];
//   const second = order[1];
//   const third = order[2];

//   return first + ", " + second + ", " + third;
// }

function sequence([first, second, third]) {
  // const [first, second, third] = order;

  return first + ", " + second + ", " + third;
}

module.exports = sequence;
