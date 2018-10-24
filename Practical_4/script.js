const ACCURACY = 0.00001;
const X = 0.56;
let y_prev;
let y = 0;
let n = 1;
let sum = 0;

do  {
  y_prev = y;
  sum += 1 / (n * n);
  y = 1 / (sum + Math.sin(X));
  n++;
  console.log(y);
}
while (y - y_prev > ACCURACY);

console.log("y = " + y);
