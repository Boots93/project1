"use strict"; // display visible errors, which helps with debugging, and prevents us to do certain things, rather than leaving it silently.

// LESSON 1 - FUNCTION
// let hasDriversLicense = false;
// const pastTest = true;

// function logger() {
//   console.log("My name is Jonas");
// }

// // calling / running / invoking function

// logger();

// function fruitProcessor(apples, oranges) { // paramaters - the variable names listed in the function's definition.
//   // Two types of Parameters: Input & Output/Return Parameters
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
//   // const booBoo = 2 + 2;
// }

// fruitProcessor(5, 0); // arguments - the real values passed to the function. 

// const appleJuice = fruitProcessor(10, 0);
// console.log(appleJuice);

// const dragonFruit = fruitProcessor(11, 5);
// console.log(dragonFruit);

// LESSON 2 - FUNCTION DECLARATION VS. EXPRESSIONS

// Function Declaration
// function calcAge1(birthYeah) {
//   return 2037 - birthYeah;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// // Function Expression
// const calcAge2 = function (birthYeah) { // anonyomous function 
//   return 2037 - birthYeah;
// }
// const age2 = calcAge2(1991);

// console.log(age1, age2);

// LESSON 3 - ARROW FUNCTIONS

// const calcAge3 = birthYear => 2037 - birthYear; // => 2037 - birthYear = signifies on what to return (implicitly)
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement1 = birthYear => { // single parameter doesn't need to be wrapped in brackets; multiple does!
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
// }

// const yearUntilRetirement2 = (birthYear, firstName) => { // arrow functions are also anonymous
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement; // return statement needs to be stated because it's more than 1 line of code.
//   return `${firstName} will be retiring in ${birthYear} years`;
// }

// // console.log(yearUntilRetirement1(1991)); // one parameter
// console.log(yearUntilRetirement2(1990, "Kai")); // multiple parameters

// LESSON 4 - FUNCTION CALLING OTHER FUNCTIONS

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));
// console.log(cutFruitPieces(2));

// LESSON 5 - REVIEWING FUNCTIONS

// const calcAge = function (year) {
//   return 2037 - year;
// }

// const yearUntilRetirement = function (birthYear, firstName) { // arrow functions are also anonymous
//   // const yearUntilRetirement = (birthYear, firstName) =>
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} will retire in ${retirement} years.`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired!`);
//     return -1;
//   }
// }

// console.log(yearUntilRetirement(1993, "Kai")); // if there is no return statement the console.log() will give out undefined

// LESSON 6 - INTRODUCTION TO ARRAYS
// A data structure that acts as as container for multiple data 
// Arrays and Objects are the two most important data structures in JavaScript


// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// let friends = ["Michael", "Steven", "Peter"]; // Basic/literal syntax for Arrays
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020); // creating Array data structure by calling upon the Array function
// console.log(y);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]); // remember that [friends.length -1] is an expression, and expressions generate a value. Inside square brackets, JavaScript always expects an expression not a statement.

// friends[2] = "Jay"; // this allows you to change the value of the const; although it is supposed to be impossible since const is unchangeable, this rule applies only to primitive values and not to arrays.
// console.log(friends);

// // friends = ["Bob", "Alice"]; // this will generate an error because you replacing the entire values while in "const".

// const firstName = "Jonas";
// const jonas = [firstName, "Schedtmann", 2037 - 1991, "teacher", friends];
// console.log(jonas);

// // Exercise

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// }
// const years = new Array(1990, 1967, 2002, 2010, 2018);

// // calcAge(years); this won't work because the input for the parameter is an entire array. 

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]); // this is for future reference to know which position the last index is in rather than assume.

// // We cannot perform operations with arrays, but we can use function on individual element of the array.

// console.log(age1, age2, age3);

// const ages = [calcAge(years[0] - 10), calcAge(years[1]), calcAge(years[years.length - 1])]; // if you include an operator in the brackets as the one above then it can work.
// console.log(ages);

// LESSON 7 - BASIC ARRAY OPERATIONS (METHODS)

// const friends = ["Michael", "Steven", "Peter"];
// const newLength = friends.push("Jay"); // adds elements to the end of the array
// console.log(friends);
// console.log(newLength);

// friends.unshift("John"); // adds elements to the beginning of the array
// console.log(friends);

// friends.pop(); // pop method is the opposite of the push method; it removes the last element.
// console.log(friends);

// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // opposite of unshift method; eliminates the first value of the array.
// console.log(friends);

// console.log(friends.indexOf("Steven")); // locates where the data is at within the array.
// console.log(friends.indexOf("Bob"));

// friends.push(23);
// console.log(friends.includes("Steven")); // returns "true" or "false" depending if the element is within the array. Useful to write a conditional statement.
// console.log(friends.includes("Bob")); // includes() is similar to the indexOf(), but more useful as an initial method to finding if a value is within an array in case of bugs. Also, KEEP IN MIND that includes() is a strict equality method.
// console.log(friends.includes(Number(23)));

// if (friends.includes("Peter")) {
//   console.log("You have a friend called Steven");
// } else {
//   console.log("You don't have a friend name Peter");
// }


// LESSON 8 - INTRODUCTIONS TO OBJECTS

// const budimanArray = [
//   "Budiman",
//   "Sihono",
//   2037 - 1993,
//   "Athlete",
//   ["Michael", "Peter", "Steven"]
// ];

// const budimanObject = {
//   firstName: "Budiman",
//   lastName: "Sihono",
//   age: 2037 - 1993,
//   job: "Athlete",
//   friends: ["Michael", "Peter", "Steven"]
// };

// In Objects, the order of the information does not really matter, while in Arrays it does since accessing information in Arrays can only be done through the location of the information. So we would have to use Arrays for ordered data structure, and Objects for unordered data.

// LESSON 9 - DOT vs. BRACKET NOTATION

// const budimanObject = {
//   firstName: "Budiman", // string value
//   lastName: "Sihono", 
//   age: 2037 - 1993, // number value
//   job: "Athlete",
//   friends: ["Michael", "Peter", "Steven"] // array value
// };

// console.log(budimanObject);
// console.log(budimanObject.lastName); // DOT notation
// console.log(budimanObject["lastName"]); // Bracket notation - upside to Bracket notation is that you can put in an expression

// const nameKey = "Name";
// console.log(budimanObject["first" + nameKey]);
// console.log(budimanObject["last" + nameKey]);

// // In DOT notation only the final property name can be used, meaning the example underneath nameKey will not work if they are converted into DOT notation.

// const interestedIn = prompt("What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends!");
// console.log(budimanObject[interestedIn]); // instead of using DOT notation, use the Bracket notation since it takes on the expression and provide the value back. REMEMBER: BRACKET NOTATION CAN TAKE ON EXPRESSION! DOT notation will show undefine and won't take the expression since there is no property name "interestedIn". 

// if (budimanObject[interestedIn]) {
//   console.log(budimanObject[interestedIn]);
// } else {
//   console.log("Option selected does not exist. Please try again! Choose between firstName, lastName, age, job, and friends!");
// }

// budimanObject.location = "Canada";
// budimanObject["twitter"] = "@BudimanSihono";
// // By doing the examples above, you're adding the properties to the specified object.
// console.log(budimanObject);

// // Challenge
// // "Budiman has 3 friends, and his best friend is called Michael.

// console.log(`${budimanObject["firstName"]} has ${budimanObject["friends"].length} friends and his best friend is called ${budimanObject.friends[0]}`)

// console.log(budimanObject.firstName + " has " + budimanObject.friends.length + " friends, and his best friend is called " + budimanObject.friends[0]);

// LESSON 10 - OBJECT METHODS

// const budi = {
//   firstName: "Budiman", // string value
//   lastName: "Sihono",
//   birthYear: 1993, // number value
//   job: "Sales",
//   friends: ["Serafina", "Gabriel", "Noah"], // array value
//   hasDriversLicense: true, // boolean value

//   // calcAge: function (birthYear) { // this would be the same as having a function attached to a variable; difference is this function has been turned into a property. This is what we call a method - a function that is attached to an object property.
//   // return 2037 - birthYear;
//   // }
//   // };

//   // calcAge: function () {
//   //   // console.log(this);
//   //   return 2037 - this.birthYear; // instead of using this method and returning a value, the method underneath allows for the value to be stored. 
//   // }
//   // }

//   calcAge: function () { // function value
//     this.age = 2037 - this.birthYear; // storing the value of the computation inside a new property, which is what ".age" is; REMEMBER: YOU CAN CREATE A NEW PROPERTY BY USING THE DOT NOTATION.
//     return this.age;
//   },

//   getSummary: function () {
//     // Option 1
//     // if (budi.hasDriversLicense === true) {
//     //   return `${budi["firstName"]} ${budi["lastName"]} is a ${this.age}-year old teacher, and he has A Driver's License!`;
//     // } else {
//     //   return `${budi["firstName"]} ${budi["lastName"]} is a ${this.age}-year old teacher, and he has NO Driver's License!`; // If you try console.log instead of return, it will generate undefined.
//     // }

//     // Option 2
//     this.summary = `${budi["firstName"]} ${budi["lastName"]} is a ${this.age}-year old teacher, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license!`; // "?" = if the condition is truthy value, ":" = if the condition is falsy value.
//     return this.summary;
//   },
// };

// console.log(budi.calcAge(1993)); // DOT Notation format
// console.log(budi["calcAge"](1993)); // Bracket Notation format

// Challenge
// Write a method called getSummary, and have this method return a string that should summarize the data about the person being described.
// "Jonas is a 46-year old teacher, and he has a/no (depending on the boolean on the property) driver's license"

// console.log(budi.getSummary()); // the function needs to be invoked initially before the property within it that is stored a value gets invoked. 
// console.log(budi.summary);
// console.log(budi.age); // why doesn't this one require the function to get called on first? Nevermind, its' method was invoked above.

// LESSON 11 - Iteration: The "for" loop

// for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// };

// LESSON 12 - LOOPING ARRAYS, BREAKING, AND CONTINUING
// const budimanArray = [
//   "Budiman",
//   "Sihono",
//   2037 - 1993,
//   "Athlete",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];

// const types = [];

// for (let i = 0; i < budimanArray.length; i++) { // if you put a "<"=" sign in the logical condition to match the length of the array, you will get an extra output of "undefined". If you hard-code a specific number, you will have to keep changing the condition. 
// Reading from Jonas Array
// console.log(budimanArray[i], typeof budimanArray[i]);

// Filling types of Array
// Option 1
// types[i] = typeof budimanArray[i];
// Option 2
// types.push(typeof budimanArray[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(years);
// console.log(ages);

// // continue & break statement
// // continue statement - to exit the current iteration of the loop and continue to the next one.
// // break statement - to completely terminate the whole loop

// console.log("--- ONLY STRINGS ---")
// for (let i = 0; i < budimanArray.length; i++) {
//   if (typeof budimanArray[i] !== "string") continue; // So again, what we want to do here, is to only log "strings" to the console; if the type of the current element is not a string then continue. Which means that everything else, should basically be skipped - to continue on and exit.
//   console.log(budimanArray[i], typeof budimanArray[i]);
// }

// console.log("--- BREAK WITH NUMBER ---")
// for (let i = 0; i < budimanArray.length; i++) {
//   if (typeof budimanArray[i] === "number") break;
//   console.log(budimanArray[i], typeof budimanArray[i]);
// }

// let result = '';
// const i = 0;
// do {
//   i += 1;
//   result += i + ' ';
// }
// while (i > 0 && i < 5);
// Despite i == 0 this will still loop as it starts off without the test

// console.log(result);

// LOOPING BACKWARDS AND LOOPS IN LOOPS
const budimanArray = [
  "Budiman",
  "Sihono",
  2037 - 1993,
  "Athlete",
  ["Michael", "Peter", "Steven"],
  true,
];

for (let i = budimanArray.length - 1; i >= 0; i--) {
  console.log(budimanArray[i]);
}

// LOOP WITHIN THE LOOP
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(` ---- Starting Exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repetition ${rep}`);
  }
}

// THE WHILE LOOP
// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) { // runs FOR this criteria
  console.log(`Lifting weights repetition ${rep}`);
}

let rep = 1;
while (rep <= 10) { // runs the loop WHILE the condition is true; only runs for this criteria and doesn't need to run with a counter.
  console.log(`WHILE: Lifting weights repetition ${rep}`);
  rep++;
  for (let books = 1; books < 6; books++) {
    console.log(`What a poop numero ${books}`);
  }
}

let dice = Math.random()

//BMI Coding Challenge

const heightMark = 1.69;
const weightMark = 78;

const heightJohn = 1.95;
const weightJohn = 92;

const bmiMark = weightMark / (heightMark * heightMark);
console.log(bmiMark);
const bmiJohn = weightJohn / (heightJohn * heightJohn);
console.log(bmiJohn);

const markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

//BMI Coding Challenge 2
if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI is ${bmiMark}, higher than John's BMI ${bmiJohn}`);
} else {
  console.log(`John's BMI is ${bmiJohn}, higher than Mark's BMI ${bmiMark}`);
}

//GYMNASTICS Coding Challenge 3
const averageDolph = (96 + 108 + 89) / 3;
const averageKoalas = (88 + 91 + 110) / 3;
console.log(averageDolph, averageKoalas);

if (averageDolph > averageKoalas) {
  console.log("Dolphin Wins");
} else if (averageDolph < averageKoalas) {
  console.log("Koala Wins");
} else {
  console.log("Draw");
}

//BONUS 1
const averageDolphBonus = 97 + 112 + 101;
const averageKoalaBonus = 109 + 95 + 123;

if (averageDolphBonus < averageKoalaBonus && averageKoalaBonus <= 100) {
  console.log("Koala Wins");
} else if (averageDolphBonus > averageKoalaBonus && averageDolphBonus <= 100) {
  console.log("Dolphin Wins");
} else if (averageDolphBonus < averageKoalaBonus && averageKoalaBonus >= 100) {
  console.log("Koala's Less than 100");
} else if (averageDolphBonus > averageKoalaBonus && averageDolphBonus <= 100) {
  console.log("Dolphin's Less than 100");
} else {
  console.log("Draw!");
}