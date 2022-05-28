// Напиши скрипт, который проверяет вхождение числа
// в отрезок обозначения x1 and x2

// - До x1
// - После x2
// - От x1 до x2
// -До x1 или После x2

const x1 = 10;
const x2 = 30;
const number = 15;

// console.log(`число ${number} попадает в отрезок до ${x1}?`, number < x1);
// console.log(`число ${number} попадает в отрезок после ${x2}?`, number > x2);

const res1 = number > x1 && number < x2;

// number > x1 && number < x2
// 50 > 10 && 50 < 30
// true && false
// FALSE

// // number > x1 && number < x2
// 5 > 10 && 5 < 30
// false && true
//FALSE

// // number > x1 && number < x2
// 15 > 10 && 15 < 30
// true && true
//TRUE

// console.log(`число ${number} попадает в отрезок от ${x1} до ${x2}?`, res1);

const res2 = number < x1 || number > x2;

// number < x1 || number > x2
// 50 < x1 || 50 > x2
// false || true
//TRUE

// number < x1 || number > x2
// 5 < x1 || 5 > x2
// true || false
// TRUE

// number < x1 || number > x2
// 25 < x1 || 25 > x2
// false || false
// FALSE

// console.log(
//   `число ${number} попадает в отрезок до ${x1} или после ${x2}?`,
//   res2,
// );
