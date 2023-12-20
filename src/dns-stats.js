const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let objOfDomains = {};

  for (let domain of domains) {
    const domainElems = domain.split('.').reverse();
    let key = '';

    for (let elem of domainElems) {
      key = key + '.' + elem;
      objOfDomains[key] = (objOfDomains[key] || 0) + 1;
    }
  }

  return objOfDomains;
}

module.exports = {
  getDNSStats
};
