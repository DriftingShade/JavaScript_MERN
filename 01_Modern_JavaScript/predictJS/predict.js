// Problem 1
// Why did the code produce that output? If applicable, how would you get the index value that did not output?

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

// 'Tesla' should be the output, as line 5 defaults to index 0.  Then 'Mercedes' will be output due to the comma placement.
// Tesla Mercedes
// If the developer was looking to output a truly random car from the array, much more logic would need to be implemented.

// Problem 2
// Why did the code produce that output? If applicable, what would you need to do to solve any potential problems?

const employee = {
    employeeName: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { employeeName: otherName } = employee;
//Predict the output
console.log(otherName);
console.log(employeeName);

// This will output Elon and then an undefined error, due to employeeName not being accessible in the global scope.
// Elon, ReferenceError: employeeName is not defined.
// The developer would need to assign employeeName to another global variable in order to access it, as they did with otherName.

// Problem 3
// Why did the code produce that output? If applicable, how would you alter this code without changing either console.log?

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

// This should output 12345 and then undefined or some error.
// 12345, undefined.
// We would need to add the password variable into the person object and that should fix the issue.

// Problem 4
// Why did the code produce that output? Declare a new variable for the value at the 4th index of the array and console.log it.

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
const [,,,,fourth] = numbers;
//Predict the output
console.log(first === second);
console.log(first === third);
console.log(fourth);

// Should print false and then true.
// false, true
// The code output that because it is checking if the values in question are strictly equal to each other.  On line 59, it's evaluating 2 === 5 which of course is false.  Line 60 is evaluating 2 === 2 which is true.

// Problem 5
// Why did the code produce that output? Console.log the last value in the secondKey property's array.

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
const [,,,,,lastValue] = secondKey;
//Predict the output
console.log(key); 
console.log(secondKey); 
console.log(secondKey[0]); 
console.log(willThisWork); 
console.log(lastValue);

// This will output value, [1, 5, 1, 8, 3, 3], 1, 5
// The way we have set up the lastValue variable, it will print out 3, the last value in the array.

// Problem 6
// First, how many scopes does the following code block contain? Define each scope and guess what the output will be.

var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (var index = 0; index < names.length; index++) {
      var name = names[index];
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }
  actuallyPrintingNames();
}
printNames(beatles);

// This code block contains 2 different scopes: The Global scope which includes the beatles array and the function printNames, an inner scope which is the function actuallyPrintingNames and because
// we are using var for index, this will work as expected and print out the names and what index each name was found at.

// Problem 7
// Why did the code produce that output?

function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      let name = names[index];
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }     

// This won't output anything because we are using the 'let' keyword for our for loop, thus we don't have access to any global variables.  Also we are never invoking this function.

// Problem 8
// Why did the code produce that output? Explain the output, including any possible errors and why they occurred. If there are no errors, explain the justification for each keyword used to declare variables.

const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      const name = names[index];
      console.log(name + ' was found at index ' + index);
    }
  }
  actuallyPrintingNames();
}
printNames(beatles);

// This function works as expected because all of the inner scopes have access to everything in their parent scopes, thus it works as intended.  The variables are correctly scoped by using the 'let' and 'const' keywords here.

// Problem 9
// Why did the code produce that output? Explain why each console.log looks the way it does.

const planet = {
	name:"Jupiter",
	milesFromSun: 49849,
	mass: 393983,
            composition: ["gas", "liquid", "oxygen"]
}
const planetCopy = {...planet}
console.log(planet.composition[0] === planetCopy.composition[0]) 
console.log(planet === planetCopy)

// In this case, we are creating a 'deep copy' thanks to the spread operator so the first console.log returns true because these elements are indeed the exact same.  The second console.log returns false
// because the objects are stored in different places in our system's memory, which does not make they strictly equal to each other.