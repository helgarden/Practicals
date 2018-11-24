function check_input(text) {
  while (true) {
    var input = prompt(text);
    if (isFinite(input) && (input > 0)) return input;
  }
}

function fifth_root(x, iter_num){
	var z = x;
	for (let count = 1; count < iter_num; count++) {
		z = (x / (z*z*z*z) + 4 * z) / 5;
	}
	return z;
}

let num_1 = check_input("Enter the first number: ");
let num_2 = check_input("Enter the second number: ");
let iter_num = check_input("Enter the number of iterations: ");

alert("Sum is " + (fifth_root(fifth_root(num_1 * num_2, iter_num)) + fifth_root(num_1, iter_num)));
