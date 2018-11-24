'use strict';

function randomInt(minValue, maxValue) {
  return Math.floor(minValue + Math.random() * (maxValue - minValue + 1));
}

function createMatrix(size, minValue, maxValue) {
  const array = [];
  for (let i = 0; i < size; i++) {
    array[i] = [];
    for (let j = 0; j < size; j++) {
      array[i][j] = randomInt(minValue, maxValue);
    }
  }
  return array;
}

function findSaddlePoint(matrix) {
  let pointCounter = 0;
  for (let i = 0; i < matrix.length; i++) {
    let rowMin = matrix[i][0];
    let colIndex = 0;
    let saddlePoint = true;
    for (let j = 1; j < matrix.length; j++) {
      if (matrix[i][j] < rowMin) {
        rowMin = matrix[i][j];
        colIndex = j;
      }
    }
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][colIndex] > rowMin) {
        saddlePoint = false;
        break;
      }
    }
    if (saddlePoint) {
      pointCounter++;
      console.log('Point: ' + matrix[i][colIndex]);
      console.log('Column index: ' + colIndex);
      console.log('Row index: ' + i);
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
