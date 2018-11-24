'use strict';

let number = [];
let result = '';

for (let count = 10; count <= 9999; count++) {
  number = String(count).split('');
  let sum = 0;
  for (let count2 = 0; count2 < number.length; count2++) {
    sum += Math.pow(number[count2], number.length);
  }
  if (sum === count) {
    result += count + ' ';
  }
}

console.log(result);
