/* Calculate y = (1 / sin(x)) * (1 / (1 / sum_from_1_to_infinity(n^2)))
   for x = 0.56 with accuracy = 0.00001 */

'use strict';

const calcY = (accuracy) => {
  const sin = 1 / Math.sin(0.56);
  let prev = 0;
  let current = 0;
  let n = 1;
  let sum = 0;
  do  {
    prev = current;
    sum += 1 / Math.pow(n++, 2);
    current = sin / sum;
  }
  while (current - prev > accuracy);
  return current;
};

console.log('y = ' + calcY(0.00001));
