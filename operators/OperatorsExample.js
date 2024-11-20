let x = 5;

// Arithmetic Operators
console.log("Arithmetic Operators"+ x + 10); // 15
console.log("Arithmetic Operators"+ x ** 2); // 25

// Assignment Operators
x += 5;
console.log(x); // 10

// Comparison Operators
console.log(x === 10); // true

// Logical Operators
console.log(x > 5 && x < 15); // true

// String Operators
let greeting = "Hello" + " " + "World!";
console.log(greeting); // "Hello World!"

// Ternary Operator
let isEven = x % 2 === 0 ? "Even" : "Odd";
console.log(isEven); // "Even"

// Type Operators
console.log(typeof x); // "number"

let name = null;
let defaultName = "Guest";

let finalName = name ?? defaultName;  // "Guest" because name is null
console.log(finalName);






// ?? is a more precise way to handle null and undefined, allowing you to leave other falsy values like 0, false, and "" untouched.
let value1 = 0;
let value2 = null;

console.log(value1 || "default");  // "default" because 0 is falsy
console.log(value1 ?? "default");  // 0 because 0 is a valid value and not null/undefined

console.log(value2 || "default");  // "default" because value2 is null
console.log(value2 ?? "default");  // "default" because value2 is null



let age = 0;
let minAge = 18;
let validAge = age || minAge; // 18 (age is falsy, so minAge is used)
console.log(validAge); // 18

let x1 = 0;
let y = 5;

let result = x1 && y;
console.log(result); // 0, because x is falsy, the result is x, and y is not evaluated

let z = 0;
let result2 = y && z;
console.log(result2); // 5, because z is truthy, so the result is the second operand, y
console.log(typeof x1);


console.log(1 + null); // 1 (null -> 0)
console.log(1 + undefined); // NaN (undefined cannot be coerced)

const obj = { name: "Alice" };
console.log("name" in obj); // true ("name" exists as a key in obj)
console.log(obj instanceof Object); // true (obj is an instance of Object)

console.log("5" + 5); // "55" (String concatenation: "5" + "5")
console.log("5" - 5); // 0 (String "5" is coerced to number 5)

