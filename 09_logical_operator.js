// 1. Types: && (AND), || (OR), ! (NOT)
// 2. AND (&&): All conditions must be true for the result to be true.
// 3. OR (||): Only one condition must be true for the result to be
// true.
// 4. NOT (!): Inverts the Boolean value of a condition.
// 5. Lower Priority than Math and Comparison operators


const isAdult = true;
const hasTicket = true;

if (isAdult && hasTicket) {
    console.log("You can enter the event.");
} else {
    console.log("You cannot enter the event.");
}
// Output: You can enter the event.



const isWeekend = true;
const isHoliday = false;

if (isWeekend || isHoliday) {
    console.log("You can relax today.");
} else {
    console.log("You need to work today.");
}
// Output: You can relax today.



const isRaining = false;

if (!isRaining) {
    console.log("You can go for a walk.");
} else {
    console.log("Better stay inside.");
}
// Output: You can go for a walk.



// Operator Precedence
// Logical operators have lower priority than mathematical and comparison operators. This means that mathematical operations and comparisons are evaluated before logical operations unless parentheses are used.
const a = 5;
const b = 10;
const c = 15;

const result = a + b > c && b < c; // (a + b > c) is evaluated first
console.log(result); // Output: false
