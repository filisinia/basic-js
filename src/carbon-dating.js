const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || isNaN(Number(sampleActivity)) ||  Number(sampleActivity)<= 0) return false;

  const k = Math.LN2 / HALF_LIFE_PERIOD;
  const res = Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / k;

  if (typeof res === 'number' && res !== 'NaN' && res >= 0) {
    return Math.ceil(res);
  } else {
    return false;
  }
}

module.exports = {
  dateSample
};
