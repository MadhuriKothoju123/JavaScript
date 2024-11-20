let counter = 0;

while (counter < 5) {
    console.log(`Counter: ${counter}`);
    counter++; // Increment counter
}

let number = 5;

do {
    console.log(`Number: ${number}`);
    number++;
} while (number < 8);


let y = 0;

while (y < 5) {
    y++;
    if (y === 3) {
        console.log("Skipping 3!");
        continue;
    }
    console.log(`Value: ${y}`);
}

let x = 0;

while (x < 10) {
    console.log(x);
    if (x === 5) {
        console.log("Stopping the loop!");
        break; // Exits the loop when x equals 5
    }
    x++;
}

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Skipping i = 3");
        continue; // Skip the rest of the loop body for i = 3
    }
    if (i === 4) {
        console.log("Breaking the loop at i = 4");
        break; // Exit the loop entirely
    }
    console.log(`i = ${i}`);
}
let marks = 85;
if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80) {
    console.log("Grade: B");
} else if (marks >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: D");
}

let choice = 2;

switch (choice) {
    case 1:
        console.log("Start Game");
        break;
    case 2:
        console.log("Load Game");
        break;
    case 3:
        console.log("Exit");
        break;
    default:
        console.log("Invalid Choice");
}
// Output: Load Game

const day = 'Saturday';

switch (day) {
    case 'Saturday':
    case 'Sunday':
        console.log('Weekend');
        break;
    default:
        console.log('Weekday');
}
let days = 3;

switch (days) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        // Fallthrough: This will also print "Mid-week" after Wednesday
    case 4:
        console.log('Thursday');
        // Fallthrough: This will also print "Mid-week" after Thursday
    case 5:
        console.log('Friday');
        console.log('Mid-week');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Invalid day');
}

const age = 25;

if (age < 13) {
    console.log("Child");
} else if (age >= 13 && age < 20) {
    console.log("Teenager");
} else {
    console.log("Adult");
}
