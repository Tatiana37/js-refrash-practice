// Оператор ветвления if

// if (true) {                   if(false){
//     //  body - works          body - does not work
// }                             }
//                                console.log(works)

// Оператор ветвления if ... else

// Оператор ветвления  else ... if

// const salary = 1500;

// if (salary < 500) {
//   console.log('Level 1');
// } else if (salary > 500 && salary <= 1500) {
//   console.log('Level 2');
// } else if (salary > 1500 && salary < 3000) {
//   console.log('Level 3');
// } else {
//   console.log('Level 4');
// }

//  Тернарный оператор

// const balance = -1000;
// let message;

// if (balance >= 0) {
//   message = 'Positive balance';
// } else {
//   message = 'Negative balance';
// }

// ИЛИ

//  const message = условие ? выражение1 : выражение2
// const message = balance >= 0 ? 'Positive balance' : 'Negative balance';
// console.log(message);

//  Блочная область видимости переменных

// const b = 10;
// if (true) {
//   console.log(b);
//   const a = 5;

//   console.log(a);
// }

// console.log(b);
