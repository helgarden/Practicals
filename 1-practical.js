'use strict';

function checkInput(text) {
  while (true) {
    console.log(text);
    const input = readline(); //??
    if (isFinite(input) && (input > 0)) return input;
  }
}

function calculateSquare(a, b) {
  return (5 * (a / 3) * b);
}

function showResult(a, b) {
  console.log('Площадь равна ' + calculateSquare(a, b));
}

const a = checkInput('Введите значение а:');
const b = checkInput('Введите значение b:');
showResult(a, b);
