function check_input(text) {
  while (true) {
    var input = prompt(text);
    if (isFinite(input) && (input > 0)) return input;
  }
}

function check_triangle(a, b, c) {
  if ((Number(a) < (Number(b) + Number(c))) && (Number(b) < (Number(a) + Number(c))) && (Number(c) < (Number(a) + Number(b)))) {
    return false;
  }
  return true;
}

function check_angle_type (angle) {
    if (angle > (Math.PI / 2)) return "тупой";
    if (angle < (Math.PI / 2)) return "острый";
    return "прямой";
}

var a, b, c;
do {
  a = check_input("Введите значение а:");
  b = check_input("Введите значение b:");
  c = check_input("Введите значение c:");
}
while (check_triangle (a, b, c));

let bc = Math.acos((b*b+c*c-a*a)/(2*b*c));
let ac = Math.acos((a*a+c*c-b*b)/(2*a*c));
let ab = Math.PI - bc - ac;

let result = "a = " + a + ", b = " + b + ", c = " + c;
result += "\nУгол между b и c " + check_angle_type(bc);
result += "\nУгол между а и с " + check_angle_type(ac);
result += "\nУгол между a и b " + check_angle_type(ab);
alert(result);
