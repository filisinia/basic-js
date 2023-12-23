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
  calculateDepth(arr) {
    throw new NotImplementedError('Not implemented');
//     if (!arr) return 0;
//     let depth = 1;

//     if (Array.isArray(arr)) {
//       console.log(depth);
//     }

//     for (let elem of arr) {
//       if (Array.isArray(elem)) {
//         depth++;
//         console.log(depth);
//       }
//       // depth = Math.max(depth, this.calculateDepth(elem));
//     }
//     return depth;
 }
}

// const arr = new DepthCalculator();
// let res = arr.calculateDepth([1, 2, 3, [8, [2]], 4, 5, []]);
// console.log(res);

module.exports = {
  DepthCalculator
};
