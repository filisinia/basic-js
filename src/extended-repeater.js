const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (typeof str !== 'string') str = String(str);
  if (typeof options.addition !== 'string') options.addition = String(options.addition);

  if (!options.separator) options.separator = '+';
  if (!options.additionSeparator) options.additionSeparator = '|';

  let strAddition = str;

  if (options.addition === 'undefined') options.addition = '';
  if (!options.additionRepeatTimes) strAddition += options.addition;

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    if (i === options.additionRepeatTimes - 1) {
      strAddition += options.addition;
    } else {
      strAddition += options.addition + options.additionSeparator;
    }
  }

  let res = strAddition;

  for (let i = 0; i < options.repeatTimes; i++) {
    if (i === options.repeatTimes - 1) {
      res += '';
    } else {
      res += options.separator + strAddition;
    }
  }

  return res;
}

module.exports = {
  repeater
};
