let js = "amazing";
if (js === "amazing") alert("JavaScript is FUN!");

// let age = 30;
// age = 31;

const birthYear = 1991;
// birthYear = 1990;
// it's best to declare values with "const" and not "let", unless you know a variable's value will mutate. It's a good habbit to minimize changes in variable as it lessens the opportunity for bugs to occur.

// Basic Operators

// Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Budiman";
const lastName = "Sihono";
console.log(firstName + "" + lastName); // concatenation operator

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100 
x++; // x = x + 1; value of x goes up by increment of 1
x--;
x--;
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

// OPERATOR PRECEDENCE

console.log(now - 1991 > now - 2020); // math operators always come before comparison operators

let alph, bet;
alph = bet = 25 - 15 - 5; // math operators come first before assignment operators
console.log(alph, bet);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

// STRINGS & TEMPLATE LITERALS

const job = "programmer";
const year = 2037

const budiman = "I'm " + firstName + ", a " + (year - birthYear) + " year-old " + job + "!";
console.log(budiman);

const budimanNew = `I'm ${firstName} a ${year - birthYear} year-old ${job}!`; // template literals
console.log(budimanNew);

console.log(`Just a regular string... `);

console.log(`String with
multiple
lines`); // best to use template literals when you want to create a specific format like this. 

// IF/ELSE STATEMENTS

let age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🤡"); // emoji is cmd + ctrl + space bar
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is still too young. Wait another ${yearsLeft} years :)`);
}

const dOB = 1998;

let century; // define century as a global var
if (dOB <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// TYPE CONVERSION AND COERCION - both converts value from one data type to another with one key difference - conversion is done manually, while coercion is when JavaScript automatically converts it behind the scene.

// conversion
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

// coercion
console.log("I am " + 23 + " years old"); // addition operators convert the numbers into strings
console.log("23" - "10" - 3); // subtraction operators convert the strings into numbers
console.log("23" * "2");
console.log("23" / "2");

// the last operator will decide what the type will be.
let n = "1" + 1; // "11"
n = n - 1;
console.log(n); // data type will be number

n = 2 + 3 + 4 + "5";
console.log(n); // data type will be string; REMEMBER: ADDITION CONVERTS DATA TYPE INTO STRINGS
//

n = "10" - "4" - "3" - 2 + "5" - "5";
console.log(n); // data type will be number; REMEMBER: SUBTRACTION CONVERTS DATA TYPE INTO NUMBERS

// TRUTHY AND FALSY VALUES

// 5 falsy values: 0, " " (empty string), undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(" "));

const money = 0;
if (money) { // with 0 as the value, it will yield falsy value which will go into else statement
  console.log("Don't spend it all");
} else {
  console.log("You should get a job!");
}

let height;
if (height) { // this will yield falsy value, which will immediately go into the else statement
  console.log("YAY! Height is defined");
} else {
  console.log("Height is undefined");
}

// EQUALITY OPERATORS: == VS ===

age = 18;
if (age === 18) { // this is what's called a strict equality operator since the data type of the value should exactly be the same as the referenced variable. 
  console.log("You have become an adult!");
}

age = 18;
if (age === "18") { // this will be a falsy value due to the fact that assigned value for "age" is a number data-type rather than a string. 
  console.log("You have become an adult as well!");
} else {
  console.log("You're still just a kid");
}

age = 19;
if (age == "19") { // this will be a truthy value due to fact that loose equality operator is in place; loose equality operator performs type coercion to the value, while strict equality operator does not. 
  console.log("You finally hit that age!");
}

const favorite = Number(prompt("What is you favorite number?", "Provide number"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
  console.log("7 is also a cool number!");
} else if (favorite === 9) {
  console.log("9 is an alright n umber!");
} else {
  console.log("Number is not 23 or 7 or 9!");
}

// BOOLEAN LOGIC - AND, OR, NOT
// AND operator requires ALL conditions to be true
// OR operator requires ONE condition to be true
// NOT operator inverts true/false value - REMEMBER: THE NOT OPERATOR HAS PRECEDENCE OVER "OR" AND "&&" OPERATORS. THE "NOT" OPERATOR'S VALUE(S) ARE INVERTED TO BEGIN WITH, AND ONLY THEN ARE COMBINED WITH "AND" / "OR".

// LOGICAL OPERATORS

const hasDriverLicense = true;
const hasGoodVision = false;

console.log(hasDriverLicense && hasGoodVision); // yields falsy value because at least one of them has false value
console.log(hasDriverLicense || hasGoodVision); // yields truthy value because at least one of them has true value
console.log(hasDriverLicense && !hasGoodVision); // yields truthy value since the NOT operator inverts the false value of "hasGoodVision" into true, rendering both statements correct.

if (hasDriverLicense && hasGoodVision) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive!");
}

const isTired = true;
console.log(hasDriverLicense || hasGoodVision || isTired); // yields true value since at least one of the statements yields truthy value.

if (hasDriverLicense && !hasGoodVision && isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive!");
}

// SWITCH STATEMENTS

const day = "monday";

// switch (day) {
//   case "monday": // day === "monday"
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break; // without breaks, you will continue to get the replies from other cases, until there's a break.
//   case "tuesday":
//     console.log("Prepare theory wins");
//     break;
//   case "wednesday": // wednesday would just display the codes for thursday
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record Videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy your weekend :D");
//     break;
//   default:
//     console.log("Not a valid day!")
// }

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory wins");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples")
} else if (day === "friday") {
  console.log("Record Videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy your weekend :D");
} else {
  console.log("Not a valid day");
}

// The Conditional (Ternary) Operator

age = 23;

age >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water");