const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrOfDigits = String(n).split('');
  let smallestDigit = 0;

  for (let i = 1; i < arrOfDigits.length; i++) {
    if (arrOfDigits[i-1] < arrOfDigits[i]) smallestDigit = arrOfDigits[i-1];
  }

  let res = arrOfDigits.join('').replace(smallestDigit, '');
  return Number(res);
}

module.exports = {
  deleteDigit
};
