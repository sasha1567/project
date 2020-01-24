'use strict'; //директива, означает, что пишем на стандарте ES6


/*var leftBorderWidth = 1;
let second = 2; //так переменные создаются, только когда код до них доходит
const pi = 3.14;


console.log(leftBorderWidth); */

var number = 5;
var string = "Hello!";
var sym = Symbol();
var boolean = true; //(false)
null; //not exist
undefined; //exists, but there is not any data
var obj = {}; //object

let persone = {
	name: "John", //ключ, двоеточие, значение
	age: 25,
	isMarried: false
};

console.log(persone["name"]);

let arr = ['plum.png','orange.jpg'];
//это массив - вид объекта
console.log(arr[1]);

//alert("Hello");

/*let answer = confirm("Are you here?");
console.log(answer); */

/*let answer = prompt("Are you 18?", "Yes");
console.log(typeof(arr)); */

//console.log("arr" + " - object");

let incr = 10,
	decr = 10;


console.log(incr++);	

console.log(5%2); //остаток при делении
// == сравнивает по значению
// === сравнивает по типу данных

let isChecked = true;
let isClose = true;

console.log(isChecked && isClose); //and
console.log(isChecked || isClose); //or
console.log(isChecked || !isClose); // !-not
