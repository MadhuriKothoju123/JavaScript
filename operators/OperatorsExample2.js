// Arithmetic Operators
let a = 10;
let b = 5;

let sum = a + b;           // Addition
let difference = a - b;    // Subtraction
let product = a * b;       // Multiplication
let quotient = a / b;      // Division
let remainder = a % b;     // Modulus (remainder)
let power = a ** b;        // Exponentiation

console.log("Arithmetic Operations:");
console.log(`Sum: ${sum}, Difference: ${difference}, Product: ${product}, Quotient: ${quotient}, Remainder: ${remainder}, Power: ${power}`);

// Comparison Operators
let x = 10;
let y = 20;

let isEqual = x == y;      // Checks if equal value (loose comparison)
let isStrictEqual = x === y; // Checks if equal value and type (strict comparison)
let isGreater = x > y;     // Checks if x is greater than y
let isLess = x < y;        // Checks if x is less than y
let isGreaterOrEqual = x >= y; // Checks if x is greater or equal to y
let isLessOrEqual = x <= y;   // Checks if x is less or equal to y
let isNotEqual = x != y;   // Checks if not equal value (loose comparison)
let isStrictNotEqual = x !== y; // Checks if not equal value and type (strict comparison)

console.log("Comparison Operations:");
console.log(`Is Equal: ${isEqual}, Is Strict Equal: ${isStrictEqual}, Is Greater: ${isGreater}, Is Less: ${isLess}, Is Greater or Equal: ${isGreaterOrEqual}, Is Less or Equal: ${isLessOrEqual}, Is Not Equal: ${isNotEqual}, Is Strict Not Equal: ${isStrictNotEqual}`);

// Logical Operators
let isAdult = true;
let hasPermission = false;

let canEnter = isAdult && hasPermission;  // AND operator
let canJoin = isAdult || hasPermission;   // OR operator
let cannotJoin = !hasPermission;          // NOT operator

console.log("Logical Operations:");
console.log(`Can Enter (AND): ${canEnter}, Can Join (OR): ${canJoin}, Cannot Join (NOT): ${cannotJoin}`);

// Assignment Operators
let z = 15;

z += 5;  // Add 5 to z
z -= 3;  // Subtract 3 from z
z *= 2;  // Multiply z by 2
z /= 4;  // Divide z by 4
z %= 3;  // Get remainder when z is divided by 3

console.log("Assignment Operations:");
console.log(`z after operations: ${z}`);
