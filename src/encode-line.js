const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  let counter = 0;
  let currentLetter = '';

  for (let i = 0; i < str.length; i++) {
    if (currentLetter === '') {
      currentLetter = str[i];
    }

    if (str[i] === currentLetter) {
      counter++;
    }

    if (str[i] !== currentLetter) {
      res += counter + currentLetter;
      currentLetter = str[i];
      counter = 1;
    }

    if (i === str.length - 1) {
      res += counter + currentLetter;
    }
  }

  while(res.includes('1')) {
    res = res.replace('1', '');
  }

  return res;
}

module.exports = {
  encodeLine
};
