'use strict';

const ACCURACY = 1e-5;
const X = 0.56;
let yPrev;
let y = 0;
let n = 1;
let sum = 0;

do  {
  yPrev = y;
  sum += 1 / (n * n);
  y = 1 / (sum + Math.sin(X));
  n++;
}
while (y - yPrev > ACCURACY);

console.log('y = ' + y);
