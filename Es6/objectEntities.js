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


// User Profile data
let userProfile = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    role: "admin",
    active: true
  };
  
  // Profile updates (partial update)
  let profileUpdates = {
    name: "Alice Johnson", // Updating the name
    email: "alice.johnson@example.com", // Updating the email
  };
  
  // Using Object.assign() to merge the original user profile with the updates
  let updatedProfile = Object.assign({}, userProfile, profileUpdates);
  
  console.log(updatedProfile);
  // Output: { id: 1, name: 'Alice Johnson', email: 'alice.johnson@example.com', role: 'admin', active: true }
  
  // Using Object.is() to compare if two objects are the same (reference comparison)
  console.log(Object.is(userProfile, updatedProfile)); 
  // Output: false (because they are different objects in memory)
  
  // Using Object.is() to compare primitive values
  let price1 = 100;
  let price2 = 100;
  let price3 = NaN;
  
  console.log(Object.is(price1, price2)); // true (same value)
  console.log(Object.is(price1, 100)); // true (same value)
  console.log(Object.is(price3, NaN)); // true (special case: NaN is equal to NaN using Object.is())
  
  // You can also check if values are truly the same by comparing objects/values directly
  console.log(Object.is(updatedProfile.name, profileUpdates.name)); // true (same name after update)
  