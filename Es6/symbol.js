const metadata = Symbol("metadata");
const metadata2 = Symbol("metadata");
console.log(metadata == metadata2);

const product = {
  name: "Laptop",
  price: 1500,
  [metadata]: { createdBy: "Admin", createdOn: "2024-11-19" },
};

console.log(product.name); // Laptop
console.log(product.price); // 1500
console.log(product[metadata]); // { createdBy: 'Admin', createdOn: '2024-11-19' }

// Metadata is not visible during iteration
console.log(Object.keys(product)); // ['name', 'price']

const uniqueKey = Symbol("libraryInternal");

const libraryObject = {
  name: "Shared Object",
  [uniqueKey]: "Library Internal Value",
};
module.exports = {
  libraryObject, uniqueKey
};
