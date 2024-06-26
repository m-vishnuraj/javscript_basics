// console.log("Hello World");
// console.warn("Hello World");
// console.error("Hello World");


// var a = 10;
// console.log(a);
// var a = "Name"
// console.log(a);

// // let name = "john";
// // console.log(name);
// // let name

// const pi = 3.14;
// console.log(pi);
// // const pi = 3.145

// // Nan

// let valueOne = 2;
// let valueTwo = "a";

// console.log(valueOne + valueTwo);

// console.log(valueOne + parseInt(valueTwo));


// const name = "John";
// const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// var y;

// console.log(typeof name);

// console.log('My name is ' + name + ' and I am ' + age);
// console.log(`My name is ${name} and I am ${age}`);


// // Array

// arrayOne = ["john", 30, true, null, undefined]

// console.log(arrayOne);

// // push

// arrayOne.push("Apple");
// console.log(arrayOne);

// // pop
// arrayOne.pop();
// console.log(arrayOne);
// // unshift

// arrayOne.unshift("Mango");
// console.log(arrayOne);

// console.log(arrayOne[0]);

// arrayOne[3] = "banana"
// console.log(arrayOne);

// console.log(arrayOne.length);
// arrayOne.splice(3, 2);
// console.log(arrayOne);


// let valueOnee = "2"
// let valueTwoo = 2;

// console.log(valueOnee == valueTwoo);
// console.log(valueOnee === valueTwoo);


// // Conditional Statements

// // if

// let value = 15;

// if (value >= 18) {
//     console.log("You are Adult")
// }

// let valuee = 16;

// if (valuee >= 18) {
//     console.log("You are adult");
// } else {
//     console.log("You are a minor");
// }

// // ternary 

// let age = 20;

// let type = (age >= 18) ? "Adult" : "Minor"

// console.log(type);

console.log("Function");

function showSting() {
    console.log("Hello World");
}

showSting();

var showString = function () {
    console.log("Hello World");
}

showSting();


var showSting = () => {
    console.log(" Arrow Function Hello World");
}

showSting();


// Map

var number = [1, 2, 3, 4, 5];


var square = number.map((num) => {
    return num * num;
})

console.log(square);

var fruits = ["Apple", "Banana", "Mango"];

var upperCase = fruits.map((fruit) => {
    return fruit.toUpperCase();
});

console.log(upperCase);

// Enhanced Object Literals

var name = "John";
var age = 20;

var person = {
    name,
    age,
    isStudent: true
}

console.log(person);

// Destructuring

var person = {
    name: "Akhil",
    age: 20,
    isStudent: true
}
var { name, age, isStudent } = person;

console.log(name);
console.log(age);
console.log(isStudent);

// promises

var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved")
    }, 2000);
})

promise.then((reslut) => {
    console.log(reslut);
})


// ! Spread Operator

var numbers = [1, 2, 3, 4, 5];

var newNumber = [...numbers, 6, 7, 8];

console.log(newNumber);