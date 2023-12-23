const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chains: '',
  chainsLength: 0,

  getLength() {
    throw new NotImplementedError('Not implemented');
    return this.chainsLength;
  },
  addLink(value) {
    throw new NotImplementedError('Not implemented');
    if (value) {
      this.chains === '' ? this.chains += (`( ${value} )`) : this.chains += (`~~( ${value} )`);
    } else {
      this.chains === '' ? this.chains += (`( )`) : this.chains += (`~~( )`);
    }
    this.chainsLength++;

    return this.chains;
  },
  removeLink(position) {
    throw new NotImplementedError('Not implemented');
    if (!Number.isInteger(position)) {
      throw new Error("You can't remove incorrect link!");
    }

    let chainToRemove = this.chains.split('~~').splice(position, 1).join('');
    this.chainsLength--;

    if(position === 0) this.chains = this.chains.replace(`${chainToRemove}~~`, '');
    if(position !== 0) this.chains = this.chains.replace(`~~${chainToRemove}`, '');

    return this;
  },
  reverseChain() {
    throw new NotImplementedError('Not implemented');
    this.chains = this.chains.split('~~').reverse().join('~~');

    return this;
  },
  finishChain() {
    throw new NotImplementedError('Not implemented');
    // this.chains = '';

    return this.chains;
  }
};

// chainMaker.addLink('hello');
// chainMaker.addLink('second');
// chainMaker.addLink('third');
// chainMaker.addLink();

// // Проверка на добавление
// console.log(chainMaker.chains);
// // console.log('chainsLength =', chainMaker.chainsLength);

// // Проверка на удаление
// chainMaker.removeLink(0);
// console.log(chainMaker.chains);
// console.log('chainsLength =', chainMaker.chainsLength);

// Проверка на реверс
// chainMaker.reverseChain();
// console.log(chainMaker.chains);


module.exports = {
  chainMaker
};
