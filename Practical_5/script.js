function check(number, result) {
  for (let count = 2; count <= 4; count++) {
    let sum = 0;
    let s_number = [];
    for (let count2 = 0; count2 < count; count2++) {
      sum += Math.pow(number[count2], count);
      s_number[s_number.length] = number[count2];
    }
    result = add_result(sum, s_number, result);
  }
return result;
}

function add_result(sum, s_number, result) {
  for (let count = 0; count < s_number.length; count++) {
    for (let count2 = 0; count2 < s_number.length; count2++) {
      if (count != count2) {
        [s_number[count], s_number[count2]] = [s_number[count2], s_number[count]];
        if (s_number.join("") == String(sum)) {
          result += " " + s_number.join("");
        }
      }
    }
  }
  return result;
}

let number = [0, 0, 0, 0];
let result = "";
  for (let count0 = 0; count0 <= 9; count0++) {
      number[0] = count0;
    for (let count1 = Number(count0); count1 <= 9; count1++) {
        number[1] = count1;
        for (let count2 = Number(count1); count2 <= 9; count2++) {
          number[2] = count2;
          for (let count3 = Number(count2); count3 <=9; count3++) {
            number[3] = count3;
            result = check(number, result);
            }
          }
        }
      }
alert(result);
