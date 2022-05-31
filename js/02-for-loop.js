//  Цикл for

// for (инициализация; условие; пост - выражение) {
//   // тело цикла
// }

// for (let i = 0; i <= 100; i += 6) {
//   console.log(i);
// }
// console.log('dlfkkdflk');

// for (let i = 10; i >= 0; i -= 1) {
//   console.log(i);
// }
// console.log('dlfkkdflk');

// =============================================================

//  pre-increment and post-increment // ЭТО ЗЛО

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// let a = 10;
// const b = a++;
// console.log(a); // 11
// console.log(b); // 10

// let a = 10;
// const b = ++a;
// console.log(a); // 11
// console.log(b); // 11

// pre and post-increment -ЭТО ЗЛО

// =============================================================

// Напиши скрипт, который подсчитывает общую сумму зарплат работников.
// Кол-во работников храниться в переменной employees
// Зарплата каждого работника это случайное число от 500 до 5000
// Записать сумму в переменную totalSalary и вывести в консоль

// 1 сделать вары

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 8;
// let totalSalary = 0;

// // 2 перебрать работников в цикле
// for (let i = 1; i <= employees; i += 1) {
//   // 3 сгенерить случайную зарплату
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary,
//   );
//   console.log(`ЗП работника ${i} - ${salary}`);
//   // 4 прибавить к тотал
//   totalSalary += salary;
//   //   console.log(`totalSalary:`, totalSalary);
// }
// // 5 лог
// console.log(`totalSalary:`, totalSalary);
// ===================================================================

// Напиши скрипт, который подсчитывает сумму всех чётных чисел,
// которые входят диапазон чисел в переменных от min до max.
// Например, если min = 0 и max = 5, то диапазон 0-5, и в нем два чётных числа - 2 и 4

//  вары
const min = 0;
const max = 5;
let total = 0;

//  цикл от мин до мах с шагом в 1

// for (let i = min; i <= max; i += 1) {
//   //   console.log(i);
//   if (i % 2 === 0) {
//     //  проверяем остаток от деления
//     console.log(`чётное:`, i);

//     // пишем в сумму
//     total += i;
//   }
// }
// console.log('total:', total);

//  ЛОГИКА ОТ ОБРАТНОГО

// for (let i = min; i <= max; i += 1) {
//   //   console.log(i);
//   if (i % 2 !== 0) {
//     console.log('НЕ Чётное:', i);
//     continue;
//   }
//   console.log(`чётное:`, i);
//   total += i;
// }
// console.log('total:', total);
