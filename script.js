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
let tvelve = 12.2px;
/* console.log(Math.round(tvelve)); */
console.log(parseInt(tvelve)); /* возвращает целое число */
console.log(parseFloat(tvelve)); /* возвращает дробное чило */