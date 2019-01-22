/*
  Determine the number of array elements
  belonging to the range of two random numbers and their sum.
  Increase each such item by the amount received.
*/
'use strict';

const randomInt = (min = 1, max = 100) =>
  Math.floor(min + Math.random() * (max - min + 1));

// generate minimal and maximal numbers for comparison with array elements
const generateValues = () => {
  const values = {
    min: randomInt(),
    max: randomInt(),
  };
  if (values.min > values.max)
    [values.min, values.max] = [values.max, values.min];
  return values;
};

const fill = array => {
  for (let i = 0; i < array.length; i++)
    array[i] = randomInt(-100);
};

/* get information about sum and numbers of elements in array
  between values.min and values.max */
const getInfo = (array, values) => {
  const info = {
    sum: 0,
    elemNum: 0,
  };
  array.forEach(elem => {
    if ((elem > values.min) && (elem < values.max)) {
      info.sum += elem;
      info.elemNum++;
    }
  });
  console.log(info);
  return info;
};

//increase every elements between value.min and value.max on info.sum
const change = (array, values) => {
  const info = getInfo(array, values);
  if (info.elemNum) {
    array.forEach(elem => {
      if ((elem > values.min) && (elem < values.max))
        elem += info.sum;
    });
  } else
    console.log('No suitable elements for changing.');
};

const array = [];
array.length = 15;
fill(array);
console.log('Array before changing:');
console.log(array);

change(array, generateValues());
console.log('Array after changing:');
console.log(array);
