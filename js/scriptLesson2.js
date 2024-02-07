"use strict"
// числовой тип данных
let number = 4;
let number1 = 4.6;

console.log(4 / 0); // получаем Infinity - бесконечность
console.log(-4 / 0);// получаем - Infinity - бесконечность
console.log("string" * 9); //получаем NaN - не число

// строки

const person = "Alex";// так же можно использовать
// ''; `` - косые кавычки
const person1 = "5";// строка может сожержать число

// логические типы

const bool = true; // или false

// Null - чегото просто не существует
console.log(something);// пытаемся вывести переменную 
//которой просто нет

// Undefined - пустое значение
let und;
console.log(und); // und is not defined

// Обьект - это коллекция данных, структура
//которая используется для хранения абсолюно
//любых данных

const obj = {
    name: "John",//свойства обьекта
    age: 25,
    isMarried: false
};
console.log(obj.name);// обращение к свойству обьекта
console.log(obj["name"]);// еще один способ

// Массивы - это частный случай обьекта, не является
// отдельным типом данных
//Массив хранит данные которые идут строго по порядку
// может хранить любой тип данных

let arr = ["plam.png", "orange.jpg", 6, "apple.bmp", {}, []];
console.log(arr[1]);// обращение к элементу массива
// нумерация начинается с 0

// Доп укрок
//Разница между обьектами и массивами

const arr1 = ["a", "b", "c"];
const arrObj = {
    a: "a",
    1: "b",
    2: "c"
};
const b = "b";
arrObj[b] = "1234";

arrObj.b = "1234";
arrObj["b"] = "1234";
console.log(arrObj["b"]);
console.log(arrObj.b);


// console.log(arr1[1]);
// console.log(arrObj.a);
// console.log(arrObj[1]);





