//if (строка с нулём)
// if ("0") {
//     alert( 'Привет' );
//   }

// Название JavaScript
// let jsName = prompt("Whats is official JS name?");
// jsName == "ECMAScript" ? alert("Correct") : alert ("Nope, it's ECMAScript");

// Покажите знак числа
// let yourNumber = prompt("Put your number here");
// yourNumber == 0 ? alert("0") : yourNumber > 0 ? alert("1") : alert("-1"); 

// Перепишите 'if' в '?'
// let result;
// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }
// result = a + b < 4 ? 'Мало' : 'Много';

//Перепишите 'if..else' в '?'
let message;
// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }
message = login == 'Сотрудник' ? 'Привет' : login == 'Директор' ? 'Здравствуйте' : login == '' ? 'Нет логина' : '';