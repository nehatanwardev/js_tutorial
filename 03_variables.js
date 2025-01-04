// what is variables ?

// variables it is used to store data 

// In JavaScript, we use the const ,var or let keywords to declare variables.

// instructions
// 1. Can't use keywords or reserved words
// 2. Can't start with a number
// 3. No special characters other than $ and _
// 4. = is for assignment
// 5. ; means end of instruction


/*
1. Using var (The Old Way)
Introduced in ES5 and earlier versions of JavaScript.
Global or function-scoped:
If declared outside a function, it becomes a global variable.
If declared inside a function, it’s limited to that function's scope.
Can be redeclared and updated.


2. Using let (The Modern Way)
Introduced in ES6.
Block-scoped:
Only accessible within the {} block where it’s defined.
Can be updated, but not redeclared in the same scope.


3. Using const (For Constants)
Introduced in ES6.
Block-scoped:
Just like let, it’s limited to the {} block where it’s defined.
Cannot be updated or redeclared after its initial assignment.
Used for values that shouldn’t change.


*/


let money = 100

money += 1  // money=money+1

console.log(money);

// var  example
var x = 10; // Declare a variable
console.log(x); // 10

x = 20; // Update the variable
console.log(x); // 20

var x = 30; // Redeclare the same variable
console.log(x); // 30

if (true) {
    var y = 50; // Accessible outside the block
}
console.log(y); // 50




//let example

let a = 10; // Declare a let variable
console.log(a); // 10

a = 15;
console.log(a); // 15

// let a = 20; // Error: Cannot redeclare variable in the same scope

if (true) {
    let b = 30; // Block-scoped
    console.log(b); // 30
}
// console.log(b); // Error: b is not defined



// *    const example
const pi = 3.14; // Declare a constant
console.log(pi); // 3.14

// pi = 3.15; // Error: Assignment to constant variable

if (true) {
    const gravity = 9.8;
    console.log(gravity); // 9.8
}
// console.log(gravity); // Error: gravity is not defined


