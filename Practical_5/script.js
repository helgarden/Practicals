function check(number) {
  let new_number = "";
  for (let count = 2; count <= 4; count++) {
    let sum=0;
    let s_number = [];
    for (let count2 = count - 1; count2 >= 0; count2--) {
      sum += Math.pow(number[count2], count);
      s_number[s_number.length] = number[count2];
    }
    new_number += add_result(sum, s_number, s_number.length - 1);
  }
  return new_number;
}

function add_result(sum, s_number, length) {
  if (!result.includes(sum)) {
  for (let count = length; count >= 0; count--) {
    for (let count2 = length; count2 > 0; count2--) {
      if (s_number[count2] != s_number[count2 - 1]) {
        [s_number[count2], s_number[count2 - 1]] = [s_number[count2 - 1], s_number[count2]];
        if (s_number.join("") == String(sum)) {
          let number = s_number.join("");
          return number;
        }
      }
    }
  }
}
return "";
}

var number = [ ];
var result = [];
var s_check;
  for (var count0 = 0; count0 <= 9; count0++) {
      number[0] = count0;
    for (var count1 = count0; count1 <= 9; count1++) {
        number[1] = count1;
        for (var count2 = count1; count2 <= 9; count2++) {
          number[2] = count2;
          for (var count3 = count2; count3 <=9; count3++) {
            number[3] = count3;
            s_check = check(number);
            if (s_check != "") result[result.length] = Number(s_check);
            }
          }
        }
      }
       {
}
result.sort(function (a, b){return a-b;});
alert(result);
