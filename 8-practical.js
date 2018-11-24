'use strict';

function randomInt(minValue, maxValue) {
  return Math.floor(minValue + Math.random() * (maxValue - minValue + 1));
}

function createMatrix(size, minValue, maxValue) {
  const array = [];
  for (let count = 0; count < size; count++) {
    array[count] = [];
    for (let count2 = 0; count2 < size; count2++) {
      array[count][count2] = randomInt(minValue, maxValue);
    }
  }
  return array;
}

function findSaddlePoint(matrix) {
  let pointCounter = 0;
  for (let count = 0; count < matrix.length; count++) {
    let rowMin = matrix[count][0];
    let colIndex = 0;
    let saddlePoint = true;
    for (let count2 = 1; count2 < matrix.length; count2++) {
      if (matrix[count][count2] < rowMin) {
        rowMin = matrix[count][count2];
        colIndex = count2;
      }
    }
    for (let count2 = 0; count2 < matrix.length; count2++) {
      if (matrix[count2][colIndex] > rowMin) {
        saddlePoint = false;
        break;
      }
    }
    if (saddlePoint) {
      pointCounter++;
      console.log('Point: ' + matrix[count][colIndex]);
      console.log('Column index: ' + colIndex);
      console.log('Row index: ' + count);
    }
  }
  if (!pointCounter) {
    console.log('Matrix does not have saddle points.');
  }
}

const size = 4;
const minValue = 0;
const maxValue = 10;
const matrix = createMatrix(size, minValue, maxValue);
console.log(matrix);
findSaddlePoint(matrix);
