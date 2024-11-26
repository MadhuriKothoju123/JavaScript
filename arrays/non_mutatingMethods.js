// map(): Applies a function to each element and returns a new array
let doubled = numbers.map(x => x * 2);
console.log("After map(x => x * 2):", doubled); // [2, 4, 8, 10, 198]

// filter(): Returns a new array with elements that pass the condition
let evens = numbers.filter(x => x % 2 === 0);
console.log("After filter(x => x % 2 === 0):", evens); // [2, 4]

// slice(): Extracts a portion of the array into a new array
let sliced = numbers.slice(1, 3); // from index 1 to index 3 (not inclusive)
console.log("After slice(1, 3):", sliced); // [2, 4]

// concat(): Merges two arrays into a new array
let moreNumbers = [7, 8, 9];
let combined = numbers.concat(moreNumbers);
console.log("After concat([7, 8, 9]):", combined); // [1, 2, 4, 5, 99, 7, 8, 9]

// flat(): Flattens a nested array by a specified depth
let nestedArray = [1, [2, [3, 4]], 5];
let flattened = nestedArray.flat(2); // Flattens up to 2 levels deep
console.log("After flat(2):", flattened); // [1, 2, 3, 4, 5]

// join(): Joins all elements into a string
let joined = numbers.join('-');
console.log("After join('-'):", joined); // "1-2-4-5-99"