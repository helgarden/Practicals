/* Find saddle points in square matrix */

'use strict';

const randomInt = (min = 1, max = 10) =>
  Math.floor(min + Math.random() * (max - min + 1));

const createMatrix = () => {
  const matrix = [];
  matrix.length = randomInt();
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = [];
    for (let j = 0; j < matrix.length; j++)
      matrix[i][j] = randomInt();
  }
  return matrix;
};

function findSaddlePoint(matrix) {
  let pointCounter = 0;
  for (let i = 0; i < matrix.length; i++) {
    const info = {
      minRowElem: matrix[i][0], // value of the minimal element in the row
      colIndex: 0,              // column index for minimal element
    };
    for (let j = 1; j < matrix.length; j++) {
      if (matrix[i][j] < info.minRowElem) {
        info.minRowElem = matrix[i][j];
        info.colIndex = j;
      }
    }
    let saddlePoint = true;
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][info.colIndex] > info.minRowElem) {
        saddlePoint = false;
        break;
      }
    }
    if (saddlePoint) {
      pointCounter++;
      console.log('Point: ' + matrix[i][info.colIndex]);
      console.log('Column index: ' + info.colIndex);
      console.log('Row index: ' + i);
    }
  }
  if (!pointCounter)
    console.log('Matrix does not have saddle points.');
}

const matrix = createMatrix();
console.log(matrix);
findSaddlePoint(matrix);
