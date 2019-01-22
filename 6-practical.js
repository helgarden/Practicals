/*
  Calculate (25th_root(a * b) + 5th_root(a)) using the formula
  z[n+1] = (x / z^4[n] + 4 * z[n]) / 5
  with random a, b and number of iterations
*/

'use strict';

const randomInt = (min, max) =>
  Math.floor(min + Math.random() * (max - min + 1));

const root5 = (x, iter) => {
  let z = x;
  for (let i = 0; i < iter; i++) {
    z = (x / Math.pow(z, 4) + 4 * z) / 5;
  }
  return z;
};

const a = randomInt(1, 100);
const b = randomInt(1, 100);
const iter = randomInt(100, 1000);
console.log('a = ' + a);
console.log('b = ' + b);
console.log(root5(root5(a * b, iter), iter) + root5(a, iter));
