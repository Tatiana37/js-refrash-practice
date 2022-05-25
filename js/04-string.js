// длина строки, свойство length

const message = 'this string has 26 symbols';
// console.log(message.length);

// контакенация строк

const firstName = 'Chelsy';
const lastName = 'Emerald';
const fullName = firstName + ' ' + lastName;
// console.log(fullName);
// console.log('Chelsy' + 'Emerald');

// Напиши скрипт, который выведет строку в формате:
//"Гостъ х у поселяется в z номер q"
// подставив вместо x y z q значения переменных

const room = 715;
const type = 'VIP';

// const welcomeMsg =
//   'Гость ' +
//   firstName +
//   ' ' +
//   lastName +
//   ' поселяется в ' +
//   type +
//   ' номер ' +
//     room;
const welcomeMsg = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`;
// console.log(welcomeMsg);

// Шаблонные строки (template strings)
// Возвращаемся к составлению строки поселения в отель

const quantity = 5;
const orderMsg = `You have ordered ${5} fridges`;

// console.log(orderMsg);

//===========================================================================

// Нормализация с методом toLowerCase()

// 'Что ищем?'

// const brand = 'Samsung';
// let brand = prompt('Give a brand');
// const normalizedBrand = brand.toLowerCase();
// console.log(normalizedBrand);

// let brand = 'SamSUnG';
// console.log(brand[3]);
// console.log(brand.slice(1).toLowerCase());

// brand = brand[0] + brand.slice(1).toLowerCase();
// console.log(brand);

//==========================================================================

// Поиск по строке с методом includes()

const blackListedWords1 = 'spam';
const blackListedWords2 = 'sale';

const string1 =
  'Hi, I am somebody? this is not a spam, i offer a million to you!';
const string2 = 'this is a biggest week SALE, do not lose it!';
const string3 = 'advertising company #fatlivesmatter';

// console.log(string1.includes(blackListedWords1));
// console.log(string1.includes(blackListedWords2));

// console.log(string2.includes(blackListedWords2));
// const normalizedString2 = string2.toLowerCase();
// console.log(normalizedString2.includes(blackListedWords2));

// console.log(string3.includes(blackListedWords2));
// console.log(string3.includes(blackListedWords2));
