// Base class Car
class Car {
    static dealershipName = "AutoWorld Dealership";
    
    // Constructor to initialize a car's properties
    constructor(make, model, year, price, mileage) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.price = price;
      this.mileage = mileage;
    }
    
    // Getter for the car's make
    get getMake() {
      return this.make;
    }
  
    // Setter for updating the car's price
    /**
     * @param {number} newPrice
     */
    set setPrice(newPrice) {
      this.price = newPrice;
    }
    
    // Static method to get dealership name
    static getDealershipName() {
      return this.dealershipName;
    }
  
    // Method to display car details
    displayDetails() {
      console.log(`${this.year} ${this.make} ${this.model} - Price: $${this.price}, Mileage: ${this.mileage} miles`);
    }
    
    // Computed property for the car's value based on mileage
    get value() {
      let depreciation = this.mileage > 50000 ? 0.1 : 0.05; // Depreciation based on mileage
      return `$${(this.price * (1 - depreciation)).toFixed(2)}`;
    }
  }
  
  // Subclass ElectricCar which extends the Car class
  class ElectricCar extends Car {
    constructor(make, model, year, price, mileage, batteryLife) {
      super(make, model, year, price, mileage); // Inheriting properties from the parent class
      this.batteryLife = batteryLife; // Additional property for electric cars
    }
  
    // Overriding the displayDetails method to include battery life
    displayDetails() {
      console.log(`${this.year} ${this.make} ${this.model} - Price: $${this.price}, Mileage: ${this.mileage} miles, Battery Life: ${this.batteryLife} years`);
    }
  
    // Static method to check if the car's battery is still within warranty
    static checkBatteryWarranty(batteryLife) {
      return batteryLife > 5 ? "Battery warranty valid" : "Battery warranty expired";
    }
  }
  
  // Subclass HybridCar which extends the Car class
  class HybridCar extends Car {
    constructor(make, model, year, price, mileage, fuelEfficiency) {
      super(make, model, year, price, mileage); // Inheriting properties from the parent class
      this.fuelEfficiency = fuelEfficiency; // Additional property for hybrid cars
    }
  
    // Overriding the displayDetails method to include fuel efficiency
    displayDetails() {
      console.log(`${this.year} ${this.make} ${this.model} - Price: $${this.price}, Mileage: ${this.mileage} miles, Fuel Efficiency: ${this.fuelEfficiency} mpg`);
    }
  
    // Static method to check if the car qualifies for tax incentives
    static checkTaxIncentive(fuelEfficiency) {
      return fuelEfficiency > 40 ? "Eligible for tax incentives" : "Not eligible for tax incentives";
    }
  }
  
  // Using class expressions to define another class for UsedCars
  const UsedCar = class {
    constructor(make, model, year, price, mileage) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.price = price;
      this.mileage = mileage;
    }
    
    // Method to display used car details
    displayDetails() {
      console.log(`${this.year} ${this.make} ${this.model} - Price: $${this.price}, Mileage: ${this.mileage} miles`);
    }
    
    // Static method for determining the car's condition
    static condition(mileage) {
      return mileage > 100000 ? "High Mileage" : "Low Mileage";
    }
  };
  
  // Creating instances of the classes
  let car1 = new Car("Toyota", "Camry", 2020, 30000, 15000);
  let electricCar1 = new ElectricCar("Tesla", "Model 3", 2021, 40000, 10000, 7);
  let hybridCar1 = new HybridCar("Toyota", "Prius", 2019, 25000, 20000, 50);
  let usedCar1 = new UsedCar("Honda", "Civic", 2015, 12000, 120000);
  
  // Accessing static properties
  console.log(Car.getDealershipName()); // "AutoWorld Dealership"
  console.log(ElectricCar.dealershipName); // "AutoWorld Dealership"
  console.log(HybridCar.checkTaxIncentive(45)); // "Eligible for tax incentives"
  
  // Using getters and setters
  console.log(car1.getMake); // "Toyota"
  car1.setPrice = 28000;
  console.log(car1.price); // 28000
  
  // Display details
  car1.displayDetails(); // "2020 Toyota Camry - Price: $28000, Mileage: 15000 miles"
  electricCar1.displayDetails(); // "2021 Tesla Model 3 - Price: $40000, Mileage: 10000 miles, Battery Life: 7 years"
  hybridCar1.displayDetails(); // "2019 Toyota Prius - Price: $25000, Mileage: 20000 miles, Fuel Efficiency: 50 mpg"
  usedCar1.displayDetails(); // "2015 Honda Civic - Price: $12000, Mileage: 120000 miles"
  
  // Using computed properties
  console.log(car1.value); // "$26600.00"
  
  // Using static methods
  console.log(ElectricCar.checkBatteryWarranty(7)); // "Battery warranty valid"
  console.log(UsedCar.condition(120000)); // "High Mileage"
  
  // new.target example: Checking if the class is being instantiated
  function checkConstructor() {
    if (new.target) {
      console.log("The constructor is called with new.");
    } else {
      console.log("The constructor is not called with new.");
    }
  }
  
  checkConstructor(); // "The constructor is not called with new."
  new checkConstructor(); // "The constructor is called with new."
  