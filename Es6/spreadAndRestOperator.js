// Example showcasing both spread and rest operators

function calculateTotalPrice(discount, ...prices) {
    const total = prices.reduce((sum, price) => sum + price, 0);
    return total - discount; // Apply discount to the total price
  }
  
  // Using the spread operator to combine arrays of prices
  const onlinePrices = [100, 200, 300];
  const storePrices = [150, 250];
  
  // Combine both arrays using the spread operator
  const allPrices = [...onlinePrices, ...storePrices];
  console.log("Combined Prices:", allPrices); // [100, 200, 300, 150, 250]
  
  // Call the function using the combined prices and the spread operator
  const discount = 50;
  const finalPrice = calculateTotalPrice(discount, ...allPrices);
  console.log("Final Price after discount:", finalPrice); // Final total price
  
  const array1= [1, 2, 3];
  const array2 = [...array1]
  array2.push(4);
  console.log(array1);

  
  const obj = { name: 'John' };
  Object.freeze(obj);
  obj.name = 'Jane';