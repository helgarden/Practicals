function check_input(text) {
  while (true) {
    let input = prompt(text);
    if (isFinite(input) && (input > 0)) return input;
  }
}

function check_polindrom(input) {
  let number = [];
  number = String(input).split("");
  for (let count = 0; count < (number.length / 2); count++) {
    if (number[count] != number[number.length - 1 - count]) {
      return false;
    }
  }
  return true;
}

let input = check_input("Введите значение разрядности");

for (let counter = 0; counter < Math.pow(10, input); counter++) {
  if (check_polindrom(counter)) {
    console.log(counter);
  }
}
