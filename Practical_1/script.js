//проверка, является ли введенное значение конечным числом больше нуля
function check_input(text) {
  while (1) {
    var input = prompt(text);
    if (isFinite(input) && (input>0)) return input;
  }
}

//вычисление площади
function calculate_square(a, b) {
  return (5*(a/3)*b);
}

//вывод на экран результатов
function show_result(a, b) {
  alert("Площадь равна " + calculate_square(a, b));
}

//основной текст программы
let a = check_input("Введите значение а:");
let b = check_input("Введите значение b:");
show_result(a, b);
