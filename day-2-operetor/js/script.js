// OPERATORS

// Arithmatic Operator +, -, /, *, %

let a = 10, b = 5;

console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(a % b);

// Assignment Operator =, +=, -=, /=, *=, %=

console.log(a += 10);
console.log(a -= 10);
console.log(a /= 10);
console.log(a *= 10);
console.log(a %= 10);

// Comparison Operator  ==, !=, >, >=, <, <=, ===, !==

console.log(a == b);
console.log(a != b);
console.log(a > b);
console.log(a >= b);
console.log(a < b);
console.log(a <= b);
console.log(a === b);
console.log(a !== b);

// Logical Operator &&, ||, !

console.log(a >= 5 && b <= 6);
console.log(a >= 5 && b <= 4);
console.log(a >= 5 || b <= 6);
console.log(a >= 5 || b <= 1);
console.log(!(a >= 6));

//

let a = parseInt(prompt("enter a : "));

let b = parseInt(prompt("enter b : "));

console.log(`sum is :  ${a+b}`);