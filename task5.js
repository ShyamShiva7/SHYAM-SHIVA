// Q1: Difference between var, let, and const

// var - function scoped, can be redeclared and reassigned
// let - block scoped, can be reassigned but not redeclared
// const - block scoped, cannot be reassigned or redeclared


// Q2: Can var be redeclared?

var a = 10;
var a = 20; // Allowed

let b = 10;
// let b = 20; // Not allowed

const c = 10;
// const c = 20; // Not allowed


// Q3: What is the output?

var x = 5;
let y = 10;
const z = 15;

x = 20;
y = 25;
// z = 30; // TypeError: Assignment to constant variable.

// Output:
// TypeError: Assignment to constant variable.


// Q4: Declaration vs Initialization

let age;        // Declaration
age = 22;       // Assignment

let city = "Coimbatore"; // Declaration + Initialization


// Q5: What will be the output?

let value;
console.log(value);

// Output:
// undefined


// Q6: What is hoisting?

console.log(number);

var number = 10;

// Output:
// undefined


// Q7: Difference between null and undefined

let firstValue;
let secondValue = null;

console.log(firstValue);
console.log(secondValue);

// Output:
// undefined
// null


// Q8: What will be the output?

console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof {});

// Output:
// object
// undefined
// object
// object


// Q9: Difference between == and ===

console.log(5 == "5");
console.log(5 === "5");

// Output:
// true
// false


// Q10: Difference between ++i and i++

let i = 5;

console.log(++i);
console.log(i++);

console.log(i);

// Output:
// 6
// 6
// 7


// Q11: What will be the output?

let num1 = 10;
let num2 = "5";

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

// Output:
// 105
// 5
// 50
// 2


// Q12: Logical operators

// && = AND
// || = OR
// !  = NOT

console.log(true && true);
console.log(true || false);
console.log(!true);

// Output:
// true
// true
// false


// Q13: What will be the output?

console.log(5 > 3 && 10 > 5);
console.log(5 > 10 || 10 > 5);
console.log(!(5 > 3));

// Output:
// true
// true
// false


// Q14: Ternary operator

let userAge = 20;

let result = userAge >= 18 ? "Adult" : "Minor";

console.log(result);

// Output:
// Adult



// Q15: Implicit and Explicit type casting

// Implicit type casting
let result1 = "10" - 5;

console.log(result1);

// Output:
// 5


// Explicit type casting
let stringNumber = "10";
let convertedNumber = Number(stringNumber);

console.log(convertedNumber);

// Output:
// 10


// Q16: What will be the output?

console.log(Number("123"));
console.log(Number("hello"));
console.log(Number(true));
console.log(Number(false));
console.log(Boolean(0));
console.log(Boolean("hello"));

// Output:
// 123
// NaN
// 1
// 0
// false
// true


// Q17: What is NaN?

let nanValue = Number("hello");

console.log(nanValue);

// Output:
// NaN




// Q18: Difference between if-else and switch

// if-else is used for conditions and ranges.
// switch is used to compare one value with multiple fixed cases.



let day = 2;

switch(day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid day");
}

// Output:
// Tuesday

let agee = 20;

if (agee >= 18) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}

// Output:
// You are eligible to vote




// Q19: What will be the output?

let currentAge = 20;

if(currentAge >= 18) {

    console.log("Adult");

} else {

    console.log("Minor");
}

// Output:
// Adult


// Q20: Nested if

let myAge = 20;
let hasID = true;

if(myAge >= 18) {

    if(hasID) {

        console.log("Entry allowed");

    }

}

// Output:
// Entry allowed


// Q21: Even or Odd using ternary operator

let evenOddNumber = 10;

let evenOddResult =
    evenOddNumber % 2 === 0 ? "Even" : "Odd";

console.log(evenOddResult);

// Output:
// Even




// Q22: Difference between while and do-while

// while checks the condition first.
// do-while executes at least once before checking the condition.

let count = 1;

while(count <= 3) {

    console.log(count);
    count++;

}

// Output:
// 1
// 2
// 3


let count2 = 1;

do {

    console.log(count2);
    count2++;

} while(count2 <= 3);

// Output:
// 1
// 2
// 3


// Q23: What will be the output?

for(let j = 1; j <= 5; j++) {

    console.log(j);

}

// Output:
// 1
// 2
// 3
// 4
// 5


// Q24: Difference between for-of and for-in

let fruits = ["Apple", "Banana", "Mango"];

for(let fruit of fruits) {

    console.log(fruit);

}

// Output:
// Apple
// Banana
// Mango


for(let index in fruits) {

    console.log(index);

}

// Output:
// 0
// 1
// 2


// Q25: Sum of numbers from 1 to 100

let sum = 0;

for(let k = 1; k <= 100; k++) {

    sum = sum + k;

}

console.log(sum);

// Output:
// 5050




// Q26: Difference between slice and splice

let numbers = [1, 2, 3, 4, 5];

console.log(numbers.slice(1, 3));

// Output:
// [2, 3]


let numbers2 = [1, 2, 3, 4, 5];

numbers2.splice(1, 2);

console.log(numbers2);

// Output:
// [1, 4, 5]


// Q27: What will be the output?

let arr = [1, 2, 3];

arr.push(4);
arr.pop();
arr.unshift(0);
arr.shift();

console.log(arr);

// Output:
// [1, 2, 3]




// Q28: Function declaration and function expression

// Function Declaration

function add(a, b) {

    return a + b;

}

console.log(add(10, 20));

// Output:
// 30


// Function Expression

let multiply = function(a, b) {

    return a * b;

};

console.log(multiply(10, 20));

// Output:
// 200


// Q29: Arrow function

let addition = (a, b) => {

    return a + b;

};

console.log(addition(10, 20));

// Output:
// 30


// Short form of arrow function

let subtraction = (a, b) => a - b;

console.log(subtraction(20, 10));

// Output:
// 10


// Q30: What will be the output?

function greet() {

    return "Hello";

}

let message = greet();

console.log(message);

// Output:
// Hello