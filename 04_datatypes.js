/*

JavaScript has 8 data types that are categorized into primitive types and non-primitive types. Let’s break them down in simple terms with examples.


1. Primitive Data Types
2. Non Primitive Data Types

*/


// 1. Primitive Data Types


// a) Number 

let age = 25;       // Integer
let price = 19.99;  // Floating-point number

let notANumber = "hello" / 2; // NaN (invalid math operation)


// b) String
// Used for textual data. Strings are enclosed in single quotes, double quotes, or backticks (for template literals).

let name = "John";           // Double quotes
let greeting = 'Hello';      // Single quotes
let message = `Hi, ${name}`; // Template literal
console.log(message);        // "Hi, John"


// c) Boolean- Represents either true or false. Commonly used in conditions.

let isLoggedIn = true;
let hasPermission = false;

console.log(isLoggedIn);


// d) Undefined - A variable that is declared but not assigned a value has the type undefined.

let notAssigned;
console.log(notAssigned); // undefined


// e) Null Represents the intentional absence of a value. It is an object type in JavaScript.
let emptyValue = null;
console.log(emptyValue); // null


// f) Symbol (ES6)
// A unique, immutable value primarily used as object property keys.
let id = Symbol("uniqueId");
let id2 = Symbol("uniqueId");

console.log(id === id2); // false (each symbol is unique)


// g) BigInt (ES11) - Used for representing integers larger than 2^53 - 1 (the limit for Number).

let bigNumber = 123456789012345678901234567890n; // Add 'n' at the end
console.log(bigNumber); // 123456789012345678901234567890n

// Operations with BigInt
let sum = bigNumber + 10n;
console.log(sum); // 123456789012345678901234567900n



// 2. Non-Primitive Data Types
// These are also called reference types. They store a reference (or address) to the value rather than the actual value.

// h) Object- A collection of key-value pairs. Keys can be strings or symbols, and values can be of any type.

let person = {
    name: "Alice",
    age: 30,
    isAdmin: true,
};

console.log(person.name); // "Alice"




