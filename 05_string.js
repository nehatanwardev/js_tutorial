
let message="hello"


// The charAt() method returns the character at a specified index (position) in a string:

console.log(message.charAt(0)); //h


// charCodeAt -The method returns a UTF-16 code (an integer between 0 and 65535).

console.log(message.charCodeAt(2)) //108




//length
console.log(message.length); //5

// JavaScript String at()
// ES2022 introduced the string method at():

console.log(message.at(0));  //h






// ------  Extracting String Parts
// There are 3 methods for extracting a part of a string:
// slice(start, end)
// substring(start, end)
// substr(start, length)

let text = "Apple, Banana, Kiwi";
console.log(text.slice(0,2)); 
console.log(text.substring(0,2)); 


console.log(text.toLocaleUpperCase())
console.log(text.toLowerCase())


text1="Hi"
text2="How are you"
console.log(text1.concat(text2))



// trim() - The trim() method removes whitespace from both sides of a string:

let str = "       Hello World!        ";
let str2 = "       Hello World!      WOWWWWW  ";
console.log(str.trim());
console.log(str2.trimStart());
console.log(str.trimEnd());



// JavaScript String padStart()
// The padStart() method pads a string from the start.



let text4 = "5";
let padded = text4.padStart(2,"0");
console.log(padded);
console.log(padded);



let myName="Jon";

console.log(myName.repeat(2)); //JonJon


// The replace() method replaces a specified value with another value in a string:
// By default, the replace() method replaces only the first match:



let text5 = "Please visit Microsoft! and Microsoft ";
let newText = text5.replace("Microsoft", "W3Schools");  

console.log(newText); //Please visit W3Schools! and Microsoft 

console.log(text5.replaceAll("Microsoft", "W3Schools"))  // Please visit W3Schools! and W3Schools 



// A string can be converted to an array with the split() method:

console.log(text5.split(" "));
















