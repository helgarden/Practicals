'use strict';

function randomInt(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

function fillArray(Array, size, min, max) {
  for (let i = 0; i < size; i++) {
    Array[i] = randomInt(min, max);
  }
}

function checkUnique(Array, num) {
  for (let i = 0; i < Array.length; i++) {
    if (Array[i] === num)
      return false;
  }
  return true;
}

function checkArray(Array, newArray) {
  for (let i = 0; i < Array.length; i++) {
    let check = 0;
    for (let j = i; j < Array.length; j++) {
      if (Array[j] === Array[i] && checkUnique(newArray, Array[i])) {
        if (check === 2) {
          newArray.push(Array[j]);
        } else {
          check++;
        }
      }
    }
  }
}

const size = 15;
const min = 0;
const max = 10;

const Array = [];
const newArray = [];
fillArray(Array, size, min, max);
console.log(Array);
checkArray(Array, newArray);
console.log(newArray);
