// Object.entries() method is used to convert a single valued array into an array object with a key-value
const myArr = 
    ["Hello", "madhuri"];

const arr = myArr.entries()
for(let item of arr){
    console.log(item);
}
const myArr2 = [5, 55, 33, 9, 6]
for(let element of myArr2){
    console.log(element);
}
function fun(a, b=1){
    return a + b;
}
console.log(fun(5,2));
console.log(fun(3));
// Object Destructuring
const college = {
    name : 'DTU',
    est : '1941',
    isPvt : false
};

let {name, est, isPvt} = college;
console.log(name, est, isPvt);

// Array Destructuring
const arr3 = ['lionel', 'messi', 'barcelona'];
let[value1,value2,value3] = arr3;
console.log(value1, value2, value3);