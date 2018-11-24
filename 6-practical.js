'use strict';

function checkInput(text) {
  while (true) {
    const input = prompt(text);
    if (isFinite(input) && (input > 0)) return input;
  }
}

function root5(x, iterNum) {
  let z = x;
  for (let count = 1; count < iterNum; count++) {
    z = (x / Math.pow(z, 4) + 4 * z) / 5;
  }
  return z;
}

const num1 = checkInput('Enter the first number: ');
const num2 = checkInput('Enter the second number: ');
const iterNum = checkInput('Enter the number of iterations: ');
const result = root5(root5(num1 * num2, iterNum)) + root5(num1, iterNum);

console.log('Sum is ' + result);
