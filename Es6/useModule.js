// Importing functions in main.js

// Importing named exports
import { add, subtract } from './module.js';

// Importing default export
import multiply from './math.js';

console.log(add(5, 3));      // 8
console.log(subtract(10, 4)); // 6
console.log(multiply(2, 4));  // 8
