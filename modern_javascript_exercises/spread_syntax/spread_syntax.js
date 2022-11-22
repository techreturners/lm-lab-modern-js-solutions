const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5, 6];

// *Original function below*
// function allTheNumbers(numbers, moreNumbers) {
//   return [];
// }

function allTheNumbers() {
  return [...moreNumbers];
}

module.exports = allTheNumbers;
