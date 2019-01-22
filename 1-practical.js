'use strict';
/* Calculates the area of the figure,
   which consists of five identical rectangles arranged as a plus.
   Height of figure and width of one rectangle are random numbers. */

const randomInt = (min, max) =>
  Math.floor(min + Math.random() * (max - min + 1));

const getArea = () =>
  (5 * randomInt(0, 10) * randomInt(0, 10) / 3);

console.log('Area is ' + getArea());
