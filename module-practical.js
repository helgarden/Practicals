'use strict';

function checkInput(text) {
  while (true) {
    const input = prompt(text);
    if (isFinite(input) && (input > 0)) return input;
  }
}

function checkPolindrom(input) {
  let number = [];
  number = String(input).split('');
  for (let count = 0; count < (number.length / 2); count++) {
    if (number[count] !== number[number.length - 1 - count]) {
      return false;
    }
  }
  return true;
}

const input = checkInput('Введите значение разрядности');

for (let counter = 0; counter < Math.pow(10, input); counter++) {
  if (checkPolindrom(counter)) {
    console.log(counter);
  }
}
