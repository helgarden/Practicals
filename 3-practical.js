/* Calculate the the nth member of the sequence given by the rule
  a[0] = 1, (a[k] = k * a[k-1] + 1 / k) */

'use strict';

const randomInt = (min, max) =>
  Math.floor(min + Math.random() * (max - min + 1));

const getMember = n => {
  let a = 1;
  for (let k = a; k <= n; k++) {
    a = k * a + 1 / k;
  }
  return a;
};

const n = randomInt(1, 100);
console.log('n = ' + n);
console.log('a = ' + getMember(n));
