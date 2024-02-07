"use strict"

// alert("Hello!");

// const result = confirm("Are you here?");
// console.log(result);

// const ansver = +prompt("Вам есть 18?", "18");// + преобразование к числу
// console.log(typeof(ansver)); // проверяет тип данных

const answers = [];
answers[0] = prompt("Как ваше имя?", "");
answers[1] = prompt("Как ваша фамилия?", "");
answers[2] = prompt("Сколько вам лет?", "");

document.write(answers);

// console.log(typeof(null)); // получаем object, это официально признаная ошибка