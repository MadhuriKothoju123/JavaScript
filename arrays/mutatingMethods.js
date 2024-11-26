let numbers = [1, 2, 3, 4, 5];
console.log("Original array:", numbers);

// push(): Adds one or more elements to the end of the array
numbers.push(6);
console.log("After push(6):", numbers); // [1, 2, 3, 4, 5, 6]

// pop(): Removes the last element
numbers.pop();
console.log("After pop():", numbers); // [1, 2, 3, 4, 5]

// shift(): Removes the first element
numbers.shift();
console.log("After shift():", numbers); // [2, 3, 4, 5]

// unshift(): Adds one or more elements to the beginning
numbers.unshift(1);
console.log("After unshift(1):", numbers); // [1, 2, 3, 4, 5]
//array.splice(start, deleteCount, item1, item2, ..., itemN);

// splice(): Adds/removes elements at a specific index
numbers.splice(2, 1, 99); // Removes 1 element at index 2, adds 99
console.log("After splice(2, 1, 99):", numbers); // [1, 2, 99, 4, 5]

// sort(): Sorts the array (modifies original array)
 numbers.sort((a, b) => b - a); // Sorts in descending order
console.log("After sort(descending):", numbers); // [99, 5, 4, 2, 1]

// reverse(): Reverses the order of elements
numbers.reverse();
console.log("After reverse():", numbers); // [1, 2, 4, 5, 99]

