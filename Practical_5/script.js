function check(number) {
  var new_number = "";
  for (var count = 2; count <= 4; count++) {
    var sum = 0;
    var s_number = [];
    for (var count2 = count - 1; count2 >= 0; count2--) {
      sum += Math.pow(number[count2], count);
      s_number[s_number.length] = number[count2];
    }
    var length = s_number.join("").length - 1;
    new_number += add_result(sum, s_number, length);
  }
  return new_number;
}

function add_result(sum, s_number, length) {
  var number = "";
  if (!result.includes(sum)) {
  for (let count = length; count >= 0; count--) {
    for (let count2 = length; count2 > 0; count2--) {
      if (s_number[count2] != s_number[count2 - 1]) {
        [s_number[count2], s_number[count2 - 1]] = [s_number[count2 - 1], s_number[count2]];
        if (s_number.join("") == String(sum)) {
          number = s_number.join("") + " ";
          return number;
        }
      }
    }
  }
}
return "";
}


/*  if ((sum == 153) || (sum == 370) || (sum == 371) || (sum == 407) || (sum == 1634) || (sum == 8208) || (sum == 9474)){
      alert(number + " " + sum);}*/

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
