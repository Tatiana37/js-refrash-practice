// парс числа с Number.parseInt(), Number.parseFloat()

let elementWidth = '50px';
// elementWidth = Number.parseInt(elementWidth);
// console.log('elementWidth:', elementWidth);

let elementHeight = '200.75px';
// elementHeight = Number.parseFloat(elementHeight);
// console.log('elementHeight:', elementHeight);

//=============================================================================================

// Метод число.toFixed(digits)
// Матрешки на примере console.log(Number(число.toFixed(digits)))

let salary = 1300.123473;
// salary = Number(salary.toFixed(3));
// // salary = Number(salary);
// console.log(salary);

//============================================================================================

// превеление ( преобразование) к числу с Number(value)
//Значение NaN ( Not a Number) и метод Number.isNan(value)

let quantity = '30';
let value = 'Эту строку невозможно преобразовать в число';

// console.log(Number(quantity));
// console.log(Number(value));

//===========================================================================================

// ОбЪект Math
// возведение в степень
// Exponent operator

// const base = 2;
// const power = 5;

// const result = Math.pow(base, power);
// console.log(result);
// console.log(base ** power); современный синтаксис (exponent operator)
// console.log(Math.sqrt(8));

// ==========================================================================================

// напиши скрипт, который просит пользователя ввести число и степень,
//     возводит число в эту степень и выводит в консоль

// // 1 попросить ввести число и сохранить в переменную
// let base = prompt('give a number');
// base = Number(base);
// console.log(base);
// // 2. попросить ввести степень и сохранить в переменную
// let power = prompt('give a power');
// power = Number(power);
// console.log(power);

// 3. вщзвести введенные данные в степень и вывести

// const result = base ** power; // or const result = Math.pow(base,power)
// console.log(result);

//================================================================================================================

// генерим псевдослучайные числа
// Math.random()
// Math.round()

// Math.random() * (max - min) + min

// const max = 80;
// const min = 10;

// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);

//===============================================================================================

//  ПРИМЕР ГЕНЕРАЦИИ СЛУЧАЙНОГО ЧИСЛА НА ПРИМЕРЕ ЦВЕТА БЭКГРАУНДА ДОКУМЕНТА

// const colors = [
//   'tomato',
//   'teal',
//   'orange',
//   'deeppink',
//   'red',
//   'lightblue',
//   'yellow',
// ];
// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min);

// const color = colors[index];
// console.log(color);

// document.body.style.backgroundColor = color;
