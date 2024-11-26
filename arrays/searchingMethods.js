
// find(): Returns the first element that matches the condition
let found = numbers.find(x => x > 3);
console.log("After find(x => x > 3):", found); // 4

// findIndex(): Returns the index of the first element that matches the condition
let foundIndex = numbers.findIndex(x => x > 3);
console.log("After findIndex(x => x > 3):", foundIndex); // 2

// indexOf(): Returns the index of a specified element, or -1 if not found
let index = numbers.indexOf(4);
console.log("After indexOf(4):", index); // 2

// includes(): Checks if the array includes a specific element
let hasTwo = numbers.includes(2);
console.log("After includes(2):", hasTwo); // true
