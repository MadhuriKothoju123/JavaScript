function demoScopeAndHoisting() {
    // Example with `var` (function-scoped and hoisting behavior)
    console.log("Using var:");
    console.log(a); // undefined (hoisted, but not initialized)
    var a = 10;
    console.log(a); // 10 (after initialization)
  
    // Example with `let` (block-scoped and hoisting behavior)
    console.log("\nUsing let:");
    // console.log(b); // Error: Cannot access 'b' before initialization
    let b = 20;
    console.log(b); // 20
  
    // Block-scoping behavior of `let`
    if (true) {
      let c = 30; // block-scoped variable
      console.log(c); // 30
    }
    // console.log(c); // Error: c is not defined outside the block
  
    // Example with `const` (block-scoped and immutability)
    console.log("Using const:");
    const d = 40;
    console.log(d); // 40
    // d = 50; // Error: Assignment to constant variable
  
    // `const` with objects (reference is constant, but properties can be modified)
    const person = {
      name: "Alice",
      age: 25
    };
    console.log(person.name); // Alice
    person.age = 26; // Modifying the property is allowed
    console.log(person.age); // 26
    // person = {}; // Error: Assignment to constant variable (cannot reassign object)
  
    // Demonstrating block-scoping of `let` and `const`
    if (true) {
      let e = 50;
      const f = 60;
      console.log(e, f); // 50, 60
    }
    // console.log(e, f); // Error: e and f are not defined outside the block
  }
  
  demoScopeAndHoisting();
  