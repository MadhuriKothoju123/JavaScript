    // Implicit Type Conversion (Type Coercion)
let num = 5;              // A number
let str = "10";           // A string

let result = num + str;   // Implicitly converts `num` to a string and concatenates
console.log(result);      // Output: "510" (number 5 is converted to a string and concatenated with "10")

// Explicit Type Conversion
let num2 = "25";           // A string
let result2 = Number(num2); // Explicitly converting string to a number
console.log(result2);      // Output: 25 (string "25" is converted to number 25)

let str2 = String(123);    // Explicitly converting number to a string
console.log(str2);         // Output: "123" (number 123 is converted to string "123")

let bool = Boolean(0);     // Explicitly converting 0 to a boolean
console.log(bool);         // Output: false (0 is falsy, so it becomes false)
let str1 = "42.5";
let num1 = parseFloat(str1); // 42.5
let intNum = parseInt(str1);