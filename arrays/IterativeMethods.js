let numbers = [1, 2, 3, 4, 5];
// forEach(): Executes a function for each element
console.log("Using forEach:");
numbers.forEach(x => console.log(x * 2)); // Logs 2, 4, 8, 10, 198

// some(): Checks if at least one element meets the condition
let hasLargeNumber = numbers.some(x => x > 50);
console.log("After some(x => x > 50):", hasLargeNumber); // true

// every(): Checks if all elements meet the condition
let allPositive = numbers.every(x => x > 0);
console.log("After every(x => x > 0):", allPositive); // true
