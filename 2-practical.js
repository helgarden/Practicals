/*
  Check the types of angles in randomly generated triangle.
*/

'use strict';

const randomInt = (min, max) =>
  Math.floor(min + Math.random() * (max - min + 1));

const isTriangle = (triangle) => {
  if ((triangle.a >= triangle.b + triangle.c) ||
      (triangle.b >= triangle.a + triangle.c) ||
      (triangle.c >= triangle.a + triangle.b))
    return false;
  return true;
};

const calcAngle = (s1, s2, s3) =>
  (Math.acos((s1 * s1 + s2 * s2 - s3 * s3) / (2 * s1 * s2)));

const findAngles = triangle => {
  triangle.ab = calcAngle(triangle.a, triangle.b, triangle.c);
  triangle.bc = calcAngle(triangle.b, triangle.c, triangle.a);
  triangle.ac = calcAngle(triangle.a, triangle.c, triangle.b);
};

const getType = angle => {
  if (angle > Math.PI / 2)
    return 'obtuse';
  if (angle < Math.PI / 2)
    return 'sharp';
  return 'right';
};

const triangle = {
  a: randomInt(1, 10),
  b: randomInt(1, 10),
  c: randomInt(1, 10),
  ab: 0,
  bc: 0,
  ac: 0,
};

if (isTriangle(triangle)) {
  findAngles(triangle);
  console.log(triangle);
  console.log('ab: ' + getType(triangle.ab));
  console.log('bc: ' + getType(triangle.bc));
  console.log('ac: ' + getType(triangle.ac));
} else
  console.log('Generated values are not suitable for triangle.');
