// Problem 1
const ageCheck = age => age > 18 ? "You are good to go!" : "Sorry! You must be 18 or older!";
console.log(ageCheck(20)); // Output: You are good to go!
console.log(ageCheck(15)); // Output: Sorry! You must be 18 or older!

// Problem 2
const isItRaining = raining => raining ? "Get your rain jacket!" : "No rain on today's forecast!";
console.log(isItRaining(false)); // Output: No rain on today's forecast!
console.log(isItRaining(true));  // Output: Get your rain jacket!

//  Problem 3
const evenOrOdd = num => num % 2 === 0 ? "That's an even number!" : "That's an odd number!";
console.log(evenOrOdd(10)); // Output: That's an even number!
console.log(evenOrOdd(15)); // Output: That's an odd number!

// Problem 4
const compareNumbers = (num1, num2) => num1 > num2 ? `${num1} is more than ${num2}!` : `${num1} is less than ${num2}!`;
console.log(compareNumbers(10, 5)); // Output: 10 is more than 5!
console.log(compareNumbers(3, 7));  // Output: 3 is less than 7!