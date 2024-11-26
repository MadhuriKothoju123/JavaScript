// Step 1: Creating an object
const student = {
    name: "Jane Doe",
    age: 20,
    enrolled: true,
    courses: ["Math", "Science", "English"],
    scores: { Math: 85, Science: 90, English: 78 },
};

// Display the initial object
console.log("Initial object:", student);

// Step 2: Adding properties
student.address = "123 Main St";
student.graduationYear = 2024;
console.log("\nAfter adding properties:", student);

// Step 3: Updating properties
student.age = 21; // Update age
student.scores.Math = 95; // Update Math score
console.log("\nAfter updating properties:", student);

// Step 4: Deleting properties
delete student.enrolled;
console.log("\nAfter deleting 'enrolled' property:", student);

// Step 5: Accessing properties
console.log("\nAccessing properties:");
console.log("Name:", student.name); // Dot notation
console.log("Address:", student["address"]); // Bracket notation

// Step 6: Iterating over properties
console.log("\nIterating over properties:");
for (let key in student) {
    console.log(`${key}:`, student[key]);
}

// Step 7: Using Object.keys(), Object.values(), and Object.entries()
console.log("\nUsing Object.keys(), Object.values(), and Object.entries():");
console.log("Keys:", Object.keys(student));
console.log("Values:", Object.values(student));
console.log("Entries:", Object.entries(student));

// Step 8: Merging objects
const additionalInfo = { hobbies: ["Reading", "Swimming"], graduated: false };
const updatedStudent = { ...student, ...additionalInfo };
console.log("\nAfter merging objects:", updatedStudent);

// Step 9: Copying objects
const shallowCopy = { ...student };
console.log("\nShallow copy:", shallowCopy);

// Step 10: Freezing and updating objects
const frozenStudent = Object.freeze({ name: "Frozen Jane", age: 22 });
console.log("\nFrozen object:", frozenStudent);
try {
    frozenStudent.age = 23; // This will be ignored or throw an error in strict mode
} catch (error) {
    console.log("Error when modifying frozen object:", error.message);
}

// Step 11: Adding methods and using them
student.addCourse = function (course) {
    this.courses.push(course);
};
student.getAverageScore = function () {
    const scores = Object.values(this.scores);
    return scores.reduce((sum, score) => sum + score, 0) / scores.length;
};
student.addCourse("History");
console.log("\nAfter adding a new course:", student.courses);
console.log("Average score:", student.getAverageScore());

// // Step 12: Transforming object structure
// const flatStudent = {
//     "name": student.name,
//     "address": student.address,
//     "scores.Math": student.scores.Math,
//     "scores.English": student.scores.English,
// };
// console.log("\nFlattened object:", flatStudent);

// Step 13: Sealing an object  It allow updating not allow delete and adding
const sealedStudent = Object.seal(student);
sealedStudent.age = 22; // Allowed
sealedStudent.newProperty = "Not allowed"; // Ignored
console.log("\nAfter sealing the object:", sealedStudent);


const original = {
    name: "Alice",
    address: {
        city: "New York",
        zip: 10001
    },
};
const shallowCopy3 = Object.assign({}, original);


// Shallow Copy and this is for simple object
const shallowCopy2 = { ...original };
shallowCopy.address.city = "Los Angeles";

console.log("Shallow Copy - Original City:", original.address.city); // "Los Angeles"

// Deep Copy (using JSON) // this is for complex nexsted objects
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.address.city = "San Francisco";

console.log("Deep Copy - Original City:", original.address.city); // "New York"


// For Arrays: slice() or Spread
const originalArray = [1, 2, 3];
const shallowCopyArray = originalArray.slice();
const shallowCopyArray2 = [...originalArray];


