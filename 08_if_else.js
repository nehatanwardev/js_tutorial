// 1. Syntax: Uses if () {} to check a condition.
// 2. What is if: Executes block if condition is true, skips if false.
// 3. What is else: Executes a block when the if condition is false.
// 4. Curly Braces can be omitted for single statements, but not
// recommended.
// 5. Use Variables: Can store conditions in variables for use in if statements.


let age = 87;
let isEligible = age > 18;

if (isEligible) {
    console.log("You are eligible to vote");

} else {
    console.log("You are not eligible to vote");
}


// if else ladder -You can chain multiple conditions using else if.

let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 75) {
    console.log("Grade: B");
} else if (score >= 50) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}



//nested if 
let age2 = 20;
let hasID = true;

if (age2 >= 18) {
    if (hasID) {
        console.log("You are allowed to enter.");
    } else {
        console.log("You need an ID to enter.");
    }
} else {
    console.log("You are not old enough to enter.");
}