'use strict';

function checkInput(text) {
  while (true) {
    const input = prompt(text);
    if (isFinite(input) && (input > 0)) return input;
  }
}

function checkTriangle(a, b, c) {
  a = Number(a);
  b = Number(b);
  c = Number(c);
  if ((a < b + c) && (b < a + c) && (c < a + b))
    return false;
  return true;
}

function checkAngleType(angle) {
  if (angle > (Math.PI / 2)) return 'тупой';
  if (angle < (Math.PI / 2)) return 'острый';
  return 'прямой';
}

let a, b, c;
do {
  a = checkInput('Введите значение а:');
  b = checkInput('Введите значение b:');
  c = checkInput('Введите значение c:');
}
while (checkTriangle(a, b, c));

const bc = Math.acos((b * b + c * c - a * a) / (2 * b * c));
const ac = Math.acos((a * a + c * c - b * b) / (2 * a * c));
const ab = Math.PI - bc - ac;

let result = 'a = ' + a + ', b = ' + b + ', c = ' + c;
result += '\nУгол между b и c ' + checkAngleType(bc);
result += '\nУгол между а и с ' + checkAngleType(ac);
result += '\nУгол между a и b ' + checkAngleType(ab);
console.log(result);
