'use strict';

function randomInt(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

function checkArray(Array, size, minСheck, maxСheck) {
  let sum, elementNumber = sum = 0;
  for (let count = 0; count < size; count++) {
    if ((Array[count] < maxСheck) && (Array[count] > minСheck)) {
      elementNumber++;
      sum += Array[count];
    }
  }
  showResults(Array, size, minСheck, maxСheck, elementNumber, sum);
}

function changeArray(Array, size, minCheck, maxCheck, sum) {
  for (let count = 0; count < size; count++) {
    if ((Array[count] < maxCheck) && (Array[count] > minCheck)) {
      Array[count] += sum;
    }
  }
}

function showResults(Array, size, minСheck, maxСheck, elementNumber, sum) {
  if (elementNumber) {
    console.log('Количество элементов, подходящих условию: ' + elementNumber);
    console.log('Сумма этих элементов: ' + sum);
    changeArray(Array, size, minСheck, maxСheck, sum);
    console.log('Новый массив:');
    console.log(Array);
  } else
    console.log('Нет элементов из заданного диапазона.');
}

function fillArray(Array, size, min, max) {
  for (let count = 0; count < size; count++) {
    Array[count] = randomInt(min, max);
  }
}

const size = 10;
const min = -25;
const max = 25;

let minCheck = randomInt(1, max);
let maxCheck = randomInt(1, max);
if (minCheck > maxCheck)
  [minCheck, maxCheck] = [maxCheck, minCheck];

const Array = [];
fillArray(Array, size, min, max);
console.log(Array);
console.log('Минимальное значение для проверки: ' + minCheck);
console.log('Максимальное значение для проверки: ' + maxCheck);
checkArray(Array, size, minCheck, maxCheck);
