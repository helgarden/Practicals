//генерирует случайное целое число от min до max
function randomInt(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

//проверяет, сколько элементов находятся в диапазоне от min_check до max_check и считает их сумму
function checkArray(Array, size, min_check, max_check) {
  let sum, elementNumber = sum = 0;
  for (let count = 0; count < size; count++) {
    if ((Array[count] < max_check) && (Array[count] > min_check)) {
      elementNumber++;
      sum += Array[count];
    }
  }
  showResults(Array, size, min_check, max_check, elementNumber, sum);
}

//показывает результат проверки из функции checkArray и изменяет массив, если нужно
function showResults(Array, size, min_check, max_check, elementNumber, sum) {
  if (elementNumber) {
    console.log("Количество элементов, подходящих условию: " + elementNumber);
    console.log("Сумма этих элементов: " + sum);
    changeArray(Array, size, min_check, max_check, sum);
    console.log("Новый массив:");
    console.log(Array);
  }
  else console.log("Нет элементов из заданного диапазона.");
}

//увеличивае  каждый элемент, находящийся в диапазоне от min_check до max_check, на сумму таких элементов
function changeArray(Array, size, min_check, max_check, sum) {
    for (let count = 0; count < size; count++) {
      if ((Array[count] < max_check) && (Array[count] > min_check)) {
        Array[count] += sum;
      }
    }
}

//заполняет массив случайными целыми числами
function fillArray(Array, size, min, max) {
    for (let count = 0; count < size; count++) {
      Array[count] = randomInt(min, max);
    }
}


/*----------------------------------------------------------------------------*/


//размер массива и диапазон значений
const size = 10;
const min = -25;
const max = 25;

//генерирует натуральные минимальные и максимальные числа для проверки
let min_check = randomInt(1, max);
let max_check = randomInt(1, max);
if (min_check > max_check)
  [min_check, max_check] = [max_check, min_check]

//работа с массивом
let Array = [];
fillArray(Array, size, min, max);
console.log(Array);
console.log("Минимальное значение для проверки: " + min_check);
console.log("Максимальное значение для проверки: " + max_check);
checkArray(Array, size, min_check, max_check);
