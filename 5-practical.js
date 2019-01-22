/* Find all Armstrong numbers from 10 to 9999
   e.g. 153 = 1^3 + 5^3 + 3^3
        1634 = 1^4 + 6^4 + 3^4 + 4^4 */

'use strict';

let number = [];

for (let num = 10; num < 10000; num++) {
  number = String(num).split('');
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += Math.pow(number[i], number.length);
  }
  if (sum === num)
    console.log(sum);
}
