// reduce(): Reduces the array to a single value
let sum = numbers.reduce((acc, x) => acc + x, 0);
console.log("After reduce((acc, x) => acc + x, 0):", sum); // 111

// reduceRight(): Reduces the array to a single value, starting from the last element
let product = numbers.reduceRight((acc, x) => acc * x, 1);
console.log("After reduceRight((acc, x) => acc * x, 1):", product); // 3960

const scores = [90, 85, 100, 92];
const average = scores.reduce((acc, curr, index, array) => {
  console.log(acc, index, array);
  acc += curr;
  if (index === array.length - 1) {
    return acc / array.length;
  }
  return acc;
}, 0);
console.log(average);
