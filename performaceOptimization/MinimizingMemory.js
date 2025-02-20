let arr = [1, 2, 3];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

// optimized code using array methods
let arr1 = [1, 2, 3];
let sum1 = arr.reduce((acc, curr) => acc + curr, 0);