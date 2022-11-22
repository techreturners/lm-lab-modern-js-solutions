// *Original function below*

/**
 * @param {number[]} numbers An array of numbers
 *  @param {number[]} moreNumbers An array of more numbers
 */

// function allTheNumbers(numbers, moreNumbers) {
//   return [];
// }

// *Solution*

function allTheNumbers(numbers, moreNumbers) {
  return [...numbers, ...moreNumbers];
}

module.exports = allTheNumbers;
