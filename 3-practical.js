'use strict';

function checkInput(text) {
  while (true) {
    const input = prompt(text);
    if (isFinite(input) && (input > 0)) return input;
  }
}

const n = checkInput('Введите значение n:');
let a = 1;
for (let k = a; k <= n; k++) {
  a = k * a + 1 / k;
}

console.log('n = ' + n + ', a = ' + a);
