function check_input(text) {
  while (true) {
    var input = prompt(text);
    if (isFinite(input) && (input > 0)) return input;
  }
}

let n = check_input("Введите значение n:");
let a = 1;
for (let k = a; k <= n; k++) {
  a = k * a + 1 / k;
}

alert("n = " + n + ", a = " + a);
