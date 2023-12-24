const { NotImplementedError, CONSTANTS } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  // constructor() {
  //   this.depth = 1;
  //   this.maxDepth = 1;
  // }
  calculateDepth(arr) {
    throw new NotImplementedError('Not implemented');
  //   if (!arr) return 0;

  //   for (let elem of arr) {
  //     if (Array.isArray(elem)) {
  //       this.calculateDepth(elem);
  //       this.maxDepth++;
  //     }
  //   }

  //   this.depth = Math.max(this.depth, this.maxDepth);
  //   // console.log(this.depth, this.maxDepth);
  //   return this.depth;
 }
}

// const arr = new DepthCalculator();
// let res = arr.calculateDepth([1, 2, 3, 4, [1, 2, [1, 2]], [2]]);
// console.log(res);

module.exports = {
  DepthCalculator
};
