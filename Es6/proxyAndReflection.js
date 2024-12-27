// The target object representing a bank account
let bankAccount = {
    balance: 1000
  };
  
  // The handler object with traps to intercept operations on the bankAccount object
  let handler = {
    get: function(target, prop) {
      if (prop === 'balance') {
        console.log(`Getting balance: ${target[prop]}`);
        return target[prop]; // Return the balance
      }
      return prop in target ? target[prop] : undefined; // Fallback for other properties
    },
    set: function(target, prop, value) {
      if (prop === 'balance' && value < 0) {
        console.log('Cannot set balance to a negative value!');
        return false; // Prevent negative balance from being set
      }
      target[prop] = value;
      console.log(`Setting ${prop} to ${value}`);
      return true; // Indicate that the operation was successful
    },
    deleteProperty: function(target, prop) {
      if (prop === 'balance') {
        console.log('Cannot delete balance!');
        return false; // Prevent deletion of the balance
      }
      delete target[prop];
      console.log(`Deleted ${prop}`);
      return true;
    }
  };
  
  // Creating a proxy object
  let proxyAccount = new Proxy(bankAccount, handler);
  
  // Interacting with the proxy object
  console.log(proxyAccount.balance); // "Getting balance: 1000" -> 1000
  proxyAccount.balance = 2000; // "Setting balance to 2000"
  console.log(proxyAccount.balance); // "Getting balance: 2000" -> 2000
  proxyAccount.balance = -500; // "Cannot set balance to a negative value!"
  delete proxyAccount.balance; // "Cannot delete balance!"
  