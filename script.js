/* "use strict";

let persone = {
  name: "John",
  age: 25,
  isMarried: false,
};
console.log(persone["name"]);

let arr = ["plump.png", "ot.png", "hhhd.png"];
console.log(arr[0]); */

let incr = 10,
  decr = 10;

console.log(incr++);
console.log(decr--);
console.log(5 % 2);
console.log("2" == 2);
console.log("2" === 2);

/* let isChecked = true,
  isClose = true;
console.log(isChecked && isClose); /* оператор или */

let isChecked = false,
  isClose = false;
console.log(isChecked || !isClose);
console.log(incr++);

// function showFirstMessage(text) { /* сначала ищется переменная внутри функции, потом выводиться то что снаружи */
//   alert(text);
//   /* let num = 29; локальная переменная не видна снаружи функции  */
// } /* замыкание функции это функция со всеми внешними переменными, которые ей доступны */

// showFirstMessage('hello'); /* вызов функции в коде */

function calc(a, b) {
  /* название функции складывается из слов ее описывающих */
  return a + b;
}
console.log(calc(3, 4));
console.log(calc(3, 90));

function retVar() {
  /* переменная будет возвращенна из тела функции во внешний мир */
  let num = 50;
  return num;
}
let anouterNum = retVar();

/* function declaration  можно вызвать функцию до ее описания создаются до начала кода */
/* function expression функцию присваиваем в переменную, функция создается тогда когда код до нее доходит
let calc = function (a, b) {
  return a + b;
}; */

// let calc = (a,b)=> a+b стрелочная функция

let str = "text";
console.log(
  str.length
); /* .length это свойство, которое описывает переменную */

console.log(str.toUpperCase()); /* здесь метод */
let tvelv = 12.2;
/* console.log(Math.round(tvelve)); */
console.log(parseInt(tvelv)); /* возвращает целое число */
console.log(parseFloat(tvelv)); /* возвращает дробное чило */

function learnJS(lang, callback) {
  /* когда нужно чтобы функции шли одна за другой */
  console.log("Я учу " + lang);
  callback();
}
learnJS("JavaScript", function () {
  console.log("Я прошел 3й урок");
});

let options = {
  wight: 1024,
  height: 1024,
  name: "test",
};
console.log(options.name); /* выводит только свойство name */
options.bool = false;
delete options.bool;
for (let key in options) {
  console.log("Свойство " + key + " имеет значание" + options[key]);
}
console.log(Object.keys(options).length); /* выводит количество свойств */

// arr[99] = 99;  добавляет 99 элемент в массив
// console.log(arr.length);  в данном случае length возвращает последний индекс элемента +1 =100
// arr.pop();   удаляет последний элемент массива
// arr.push("5");  добавляет элемент к массиву
// arr.shift();  убирает первый элемент массива
// arr.unshift("1");  добавляет элемент в начало массива

// for (let i = 0; i < arr.length; i++) {
//   /* перебирает элементы массива */
//   console.log(arr[i]);

// let arr = ["first", 2, 3, "four", 5];
// arr.forEach(function (item, i, mass) {
//   /* перебрат все элементы массива */
//   console.log(i + ": " + item + " (массив: " + mass + ")");
// });
// console.log(arr);

// let mass = [1, 3, 4, 5, 7];
// for (let key of mass) {
//   /* при помощи for/in получаем ключи массива, а не сам массив, если in заменить на of, то получим значения*/
//   console.log(key);
// }

// let ans = prompt("", ""),
//   arr = [];
// arr = ans.split(","); /* то что ввели на сайте отобразилось в массив */
// console.log(arr);

// let arr = ["klajflka", "gdggd", "shhsh"],
//   i = arr.join(", "); /* склеивает все в одну стороку */
// console.log(i);

// let arr = ["klajflka", "gdggd", "shhsh"],
//   i = arr.sort(); /* отсортировать по алфафиту */
// console.log(arr);
let arr = [1, 5, 13, 6],
  i = arr.sort(compaerNum); /* отсортировать по порядку числа */
function compaerNum(a, b) {
  return a - b;
}
console.log(arr);
