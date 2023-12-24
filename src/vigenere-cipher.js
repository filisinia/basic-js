const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(method = true) {
    this.method = method;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    const res = [];
    let gap = 0;

    for (let i = 0; i < message.length; i++) {
      const elem = (message[i]).toUpperCase();

      if (elem < 'A' || elem > 'Z') {
        res.push(elem);
        gap++;
      } else {
        const keyLetter = (key[(i - gap) % key.length]).toUpperCase();
        const encryptedLetter = (elem.charCodeAt(0) + keyLetter.charCodeAt(0)) % 26 + 65;
        res.push(String.fromCharCode(encryptedLetter));
      }
    }

    return this.method ? res.join('') : res.reverse().join('');
  }
  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    let res = [];
    let gap = 0;

    for (let i = 0; i < message.length; i++) {
      let elem = (message[i]).toUpperCase();

      if (elem < 'A' || elem > 'Z') {
        res.push(elem);
        gap++;
      } else {
        let keyLetter = (key[(i - gap) % key.length]).toUpperCase();
        let encryptedLetter = (elem.charCodeAt(0) - keyLetter.charCodeAt(0) + 26) % 26 + 65;
        res.push(String.fromCharCode(encryptedLetter));
      }
    }

    return this.method ? res.join('') : res.reverse().join('');
  }

}

module.exports = {
  VigenereCipheringMachine
};
