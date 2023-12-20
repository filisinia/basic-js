const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(!members) return false;
  let names = [];

  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') names.push(members[i]);
  }

  if(!names) return false;
  let firstLetters = [];

  names.forEach(name => {
    let nameTrim = name.trimStart();
    firstLetters.push(nameTrim[0].toUpperCase());
  });

  console.log(firstLetters);
  const res = firstLetters.sort().join('');
  return res;
}

module.exports = {
  createDreamTeam
};
