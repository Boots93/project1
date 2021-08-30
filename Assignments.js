// Assignment 1 - Variables and Values
const country = "Indonesia";
const continent = "Asia";
let population = 130;

console.log(continent);
console.log(country);
console.log(population);

// Assignment 2 - Data Types
let isIsland = true;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// Assignment 3 - let, const, var
language = "Indonesian";
// isIsland = false;

// Assignment 4 - Basic Operators
console.log(population / 2);
console.log(population++);

const finland = 6;
console.log(population > finland);

const averageCountry = 33;
console.log(population < averageCountry);

const description = country + " is in " + continent + " , and its " + population + " people speak " + language;
console.log(description);

//Assignment 5 - Strings and Template Literals
const descriptionRecreate = `${country} is in ${continent}, and its ${population} people speak ${language}`;
console.log(descriptionRecreate);

//Assignment 6 - Taking Decisions: if/else statements
if (population > 33) {
  console.log(`${country}'s population is above average.`);
} else {
  console.log(`${country}'s population is ${averageCountry - population}`);
}

// Assignment 7 - Type Conversion and Coercion
console.log("9" - "5"); // 4
console.log("19" - "13" + "17"); // 617
console.log("19" - "13" + 17); // 23
console.log("123" < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143

// Assignment 8 - Equality Operators: == vs. ===
// const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

// if (numNeighbours === 1) {
// console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
// console.log("More than 1 border!");
// } else {
// console.log("No borders")
// }

// Assignment 9 - Logical Operators

if (language === "English" && population < 50 && !isIsland) { // Language = English, population = less than 50 million, country = not island
  console.log(`You should live in ${country}!`);
} else {
  console.log(`${country} does not meet your criteria!`);
}

// Assignment 10 - The Switch Statement
language = "English";

switch (language) {
  case "Mandarin":
  case "Chinese":
    console.log("MOST number of native speakers!");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "English":
    console.log("3rd place");
    break;
  case "Hindi":
    console.log("Number 4");
    break;
  case "Arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

// Assignment 11 - The Conditional (Ternary) Operator
population > 33 ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is below average`);
// another way would be to:
// console.log (
// `${country}'s population is ${population > 33 ? "above" : 
// "below"} average`);

// Coding Challenge #1
const massMark1 = 78;
const heightMark1 = 1.69;
const bmiMark1 = massMark1 / heightMark1 ** 2;
console.log(bmiMark1);

const massJohn1 = 92;
const heightJohn1 = 1.95;
const bmiJohn1 = massJohn1 / heightJohn1 ** 2;
console.log(bmiJohn1);

const massMark2 = 95;
const heightMark2 = 1.88;
const bmiMark2 = massMark2 / heightMark2 ** 2;
console.log(bmiMark2);

const massJohn2 = 85;
const heightJohn2 = 1.76;
const bmiJohn2 = massJohn2 / heightJohn2 ** 2;
console.log(bmiJohn2);

const markHigherBMI1 = bmiJohn1 < bmiMark1;
console.log(markHigherBMI1);

const markHigherBMI2 = bmiJohn2 < bmiMark2;
console.log(markHigherBMI2);

// Coding Challenge #2
if (bmiMark1 > bmiJohn1) {
  console.log(`Mark's BMI (${bmiMark1}) is higher than John's (${bmiJohn1})`);
} else {
  console.log(`John's BMI (${bmiJohn1}) is higher than Mark's (${bmiMark1})`);
}

if (bmiMark2 > bmiJohn2) {
  console.log(`Mark 2's BMI (${bmiMark2}) is higher than John 2's (${bmiJohn2})`);
} else {
  console.log(`John 2's BMI (${bmiJohn2}) is higher than Mark 2's (${bmiMark2})`);
}

// Coding Chalenge #3

const dolphins1 = 96;
const dolphins2 = 108;
const dolphins3 = 89;
const dolphinsAverageScore = (dolphins1 + dolphins2 + dolphins3) / 3;
console.log(dolphinsAverageScore); // 1.
console.log(dolphins1 == dolphinsAverageScore);
console.log(dolphins2 == dolphinsAverageScore);
console.log(dolphins3 == dolphinsAverageScore);

const koalas1 = 88;
const koalas2 = 91;
const koalas3 = 110;
const koalasAverageScore = (koalas1 + koalas2 + koalas3) / 3;
console.log(koalasAverageScore);
console.log(koalas1 == koalasAverageScore);
console.log(koalas2 == koalasAverageScore);
console.log(koalas3 == koalasAverageScore);

if (dolphinsAverageScore > koalasAverageScore) { // 2.
  console.log("Dolphins The Winner!");
} else if (dolphinsAverageScore === koalasAverageScore) {
  console.log("We have a draw!");
} else if (koalasAverageScore > dolphinsAverageScore) {
  console.log("Koalas The Winner!");
}

const dolphins1Bonus1 = 97;
const dolphins2Bonus1 = 112;
const dolphins3Bonus1 = 101;
const dolphinsAverageBonus1 = (dolphins1Bonus1 + dolphins2Bonus1 + dolphins3Bonus1) / 3;
console.log(dolphinsAverageBonus1);

const koalas1Bonus1 = 109;
const koalas2Bonus1 = 95;
const koalas3Bonus1 = 123;
const koalasAverageBonus1 = (koalas1Bonus1 + koalas2Bonus1 + koalas3Bonus1) / 3;
console.log(koalasAverageBonus1);

if (dolphinsAverageBonus1 >= 100 && dolphinsAverageBonus1 > koalasAverageBonus1) { // 3.
  console.log("Dolphins win Bonus 1 Game!");
} else if (koalasAverageBonus1 >= 100 && koalasAverageBonus1 > dolphinsAverageBonus1) {
  console.log("Koalas win Bonus 1 Game!");
} else if (dolphinsAverageBonus1 < 100 || koalasAverageBonus1 < 100) {
  console.log("The team needs 100 point to qualify!");
} else if (dolphinsAverageBonus1 == koalasAverageBonus1) {
  console.log("Bonus Game ends in a draw!")
} else {
  console.log("We're in a stalemate!");
}

const dolphins1Bonus2 = 97;
const dolphins2Bonus2 = 112;
const dolphins3Bonus2 = 81;
const dolphinsAverageBonus2 = (dolphins1Bonus2 + dolphins2Bonus2 + dolphins3Bonus2) / 3;
console.log(dolphinsAverageBonus2);

const koalas1Bonus2 = 109;
const koalas2Bonus2 = 95;
const koalas3Bonus2 = 86;
const koalasAverageBonus2 = (koalas1Bonus2 + koalas2Bonus2 + koalas3Bonus2) / 3;
console.log(koalasAverageBonus2);

if (dolphinsAverageBonus2 === koalasAverageBonus2 && dolphinsAverageBonus2 >= 100 && koalasAverageBonus2 >= 100) {
  console.log("It's a draw!");
} else {
  console.log("No one gets a trophy!");
}

// Coding Challenge #4

// console.log (
// `${country}'s population is ${population > 33 ? "above" : 
// "below"} average`);

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
const totalValue = `${bill + tip}`;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${totalValue}`);
