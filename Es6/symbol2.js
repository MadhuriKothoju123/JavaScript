// const {libraryObject} = require('./symbol');
const { libraryObject } = require('./symbol');

console.log(libraryObject, "libraryObject")
console.log(libraryObject.name); // Shared Object
console.log(Object.keys(libraryObject)); // ['name']
libraryObject.name= "libraryObjectnameChnaged";
console.log(libraryObject, "chnagedLibraryObject")
// Access the internal Symbol property
// console.log(libraryObject[uniqueKey]); 