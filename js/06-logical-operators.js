// Прведение к булю на примере Boolean(value)

// console.log(Boolean(0)); // FALSE and : NaN, null, undefined, "",'', false
// console.log(Boolean(-5, 5, true, '0')); // all others = TRUE

//======================================================================

// Логическще И(оператор &&)
//     - Запинается на лжи
//     - Возвращает то, на чем запнулось или последний операнд
console.log(5 && 'hello' && 7 && 'mango'); // mango
console.log(5 && 'hello' && 0 && 7 && 'mango'); // 0
console.log(0 && 'hello'); // 0
console.log(false && 1); // false
// Логическще ИЛИ(оператор ||)
// - Запинается на правде
// - Возвращает то, на чем запнулось или последний операнд

// Логическое НЕ(оператор!)
// Делает инверсию : правда в ложь и ложь в правду
