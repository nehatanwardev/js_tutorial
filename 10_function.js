// A function in JavaScript is a block of reusable code that performs a specific task. 

// function functionName() {
//     Code to execute
// }


function greeting() {
    console.log('Hello World!');
}

greeting()



// Functions with Parameters:
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("John");  // Output: Hello, John!
greet("Alice"); // Output: Hello, Alice!




// Functions with Return Values:

function add(a, b) {
    return a + b;
}

let sum = add(3, 4);  // sum will be 7
console.log(sum);  // Output: 7




// Types of Functions:
//1. Named Functions: Like the examples above, they have a name and can be called by their name.
// 2. Anonymous Functions: Functions without a name, often used as values for variables or passed as arguments.
// 3. Arrow Functions: A shorthand way of writing functions (especially useful for short functions).



// Example of an Anonymous Function:


let goodBye =function(name){
    console.log("Goodbye, " + name + "!");

}

goodBye("John");  // Output: Goodbye, John!



let addSum = (a,b)=>a+b;
let sumResult=addSum(3,0);  
console.log(sumResult);  // Output: 3


