"use strict";

// LESSON 1 - FUNCTION

// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }
// console.log(describeCountry("Finland", 6, "Helsinki"));

// const indonesia = describeCountry("Indonesia", 330, "Jakarta");
// console.log(indonesia);

// const singapore = describeCountry("Singapore", 5, "Singapore");
// console.log(singapore);

// const thailand = describeCountry("Thailand", 69, "Bangkok");
// console.log(thailand);


// LESSON 2 - FUNCTION DECLARATIONS VS. EXPRESSIONS

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const indonesia = percentageOfWorld1(330);
// const singapore = percentageOfWorld1(5);
// const thailand = percentageOfWorld1(69);

// console.log(indonesia, singapore, thailand);

// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// }

// const indonesia2 = percentageOfWorld2(330);
// const singapore2 = percentageOfWorld2(5);
// const thailand2 = percentageOfWorld2(69);

// console.log(indonesia2, singapore2, thailand2);

// LESSON 3 - ARROW FUNCTIONS

// const percentageOfWorld3 = population => (population / 7900) * 100;

// const indonesia3 = percentageOfWorld3(330);
// const singapore3 = percentageOfWorld3(5);
// const thailand3 = percentageOfWorld3(69);

// LESSON 4 - FUNCTIONS CALLING OTHER FUNCTIONS

// Function Declaration
// function describePopulation(country, population) {
//   const worldPercentage = percentageOfWorld1(population);
//   return `${country} has ${population} million people, which is about ${worldPercentage}% of the world.`
// }

// const indonesia4 = describePopulation("Indonesia", 330);
// console.log(indonesia4);

// const singapore4 = describePopulation("Singapore", 5);
// console.log(singapore4);

// const thailand4 = describePopulation("Thailand", 69);
// console.log(thailand4);

// Function Expressions
// const describePopulation = function (country, population) {
//   const worldPercentage = percentageOfWorld1(population);
//   const description = `${country} has ${population} people, which is about ${worldPercentage}% of the world`;
//   return description;
// }

// const indonesia4 = describePopulation("Indonesia", 330);
// console.log(indonesia4);

// const singapore4 = describePopulation("Singapore", 5);
// console.log(singapore4);

// const thailand4 = describePopulation("Thailand", 69);
// console.log(thailand4);

// CODING CHALLENGE 1 

// const calcAge3 = birthYear => 2037 - birthYear; // => 2037 - birthYear = signifies on what to return (implicitly)
// const age3 = calcAge3(1991);
// console.log(age3);

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// // Test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);


// const checkWinner = function (avgDolphins, avgKoalas) {
//   const dolphins = "Dolphins";
//   const koalas = "Koalas";
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`${dolphins} win with ${avgDolphins} vs. ${avgKoalas}.`);
//     return 1;
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`${koalas} win with ${avgKoalas} vs. ${avgDolphins}.`);
//     return -1;
//   } else {
//     console.log(`Neither the ${dolphins} or ${koalas} win.`);
//     return 0;
//   }
// }

// console.log(checkWinner(scoreDolphins, scoreKoalas)); // console.log will consider the values inside the console.log as undefined, unless a return statement is included in the function.

// // Test 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);

// console.log(checkWinner(scoreDolphins, scoreKoalas));

// const calcAverageNext = (score1, score2, score3) => {
//   const average = (score1 + score2 + score3) / 3;
//   return average;
// }

// calcAverageNext(1, 2, 3); // will not get executed unless with console.log, and return statement won't get 

// const dolphinsAvg = calcAverageNext(44, 23, 71);
// const koalasAvg = calcAverageNext(65, 54, 49);
// console.log(dolphinsAvg, koalasAvg);

// const checkWinner1 = function (dolphinsScore, koalasScore) {
//   // const dolphins = dolphinsScore;
//   // const koalas = koalasScore;

//   if (dolphinsScore >= 2 * koalasScore) {
//     console.log("Dolphins Win");
//   } else if (koalasScore >= 2 * dolphinsScore) {
//     console.log("Koalas Win");
//   } else {
//     console.log(0);
//     return "No Team Wins"
//       ;
//   }
// }

// console.log(checkWinner1(dolphinsAvg, koalasAvg)); // Without using console.log, return statement command will not get executed. This means that if you're invoking a function that finishes with a return statement, it will not appear on the console; any other lines of code before the statement (i.e. console.log) will get passed on. For example, if you have a console.log inside an "if" or function body before a return, it will stop at the console.log instead of the return. 
// If you don't have a return statement when you're invoking using a console.log, it will display as "undefined".

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   const dolphins = "Dolphins";
//   const koalas = "Koalas";
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`${dolphins} win with ${avgDolphins} vs. ${avgKoalas}.`);
//     return 1;
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`${koalas} win with ${avgKoalas} vs. ${avgDolphins}.`);
//     return -1;
//   } else {
//     console.log(`Neither the ${dolphins} or ${koalas} win.`);
//     return 0;
//   }
// }

// console.log(checkWinner(scoreDolphins, scoreKoalas));

// LESSON 6 - INTRODUCTION TO ARRAYS

// const population = new Array(330, 5, 69, 5);
// console.log(population.length === 4);

// const percentages = [percentageOfWorld1(population[0]), percentageOfWorld1(population[1]), percentageOfWorld1(population[2]), percentageOfWorld1(population[population.length - 1])];
// console.log(percentages);

// LESSON 7 - BASIC ARRAY OPERATIONS (METHODS)

// const neighbours = new Array("Singapore", "Malaysia", "Thailand");

// neighbours.push("Utopia");
// console.log(neighbours);

// neighbours.pop();
// console.log(neighbours);

// if (neighbours.includes("Germany")) {
//   console.log("It probably is a central European country!");
// } else {
//   console.log("Probably not a central European country!");
// }

// console.log(neighbours.indexOf("Thailand"));
// neighbours[2] = "Republic of Thailand";
// console.log(neighbours);

// CODING CHALLENGE 2

// function calcTip(bill) {

// return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//     // return `The tip for the bill of ${bill} is ${bill * 0.15}.`;
//   } else {
//     return bill * 0.2;
//     // return `The tip for the bill of ${bill} is ${bill * 0.2}.`;
//   }
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];

// console.log(tips);

// // Bonus

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[bills.length - 1] + tips[tips.length - 1]];
// console.log(`The total for bill and tips 1 will be ${total[0]}`);
// console.log(`The total for bill and tips 2 will be ${total[1]}`);
// console.log(`The total for bill and tips 3 will be ${total[2]}`);

// console.log(total);

// // NOTE: Is there a way to incorporate Template String into a function and just adding the number values together, rather than merging the string with the numbers?

// const nextCalcTip = bill => {
//   if (bill >= 50 && bill <= 300) {
//     console.log(`The current tip will be 15%`)
//     return bill * 0.15;
//   } else {
//     console.log(`The current til will be 20%`);
//     return bill * 0.20;
//   }
// }

// console.log(nextCalcTip(100));

// const nextBills = new Array(125, 555, 44);
// const tips = [nextCalcTip(nextBills[0]), nextCalcTip(nextBills[1]), nextCalcTip(nextBills[2])];
// console.log(tips);
// const total = [nextCalcTip(nextBills[0]) + nextBills[0], nextCalcTip(nextBills[1]) + nextBills[1], nextCalcTip(nextBills[2]) + nextBills[2]];
// const total2 = [nextBills[0] + tips[0], nextBills[1] + tips[1], nextBills[2] + tips[2]];
// console.log(total);
// console.log(total2);

// LESSON 9 - INTRODUCTIONS TO OBJECTS

// const myCountry = {
//   country: "Indonesia",
//   capital: "Jakarta",
//   language: "Indonesian",
//   population: 270,
//   neighbours: ["Singapore", "Thailand", "Malaysia"],
// };

// console.log(myCountry);

// // LESSON 9 - DOT vs. BRACKET NOTATION

// console.log(`${myCountry.country} has ${myCountry.population} million Indonesian-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

// console.log(myCountry.population + 2); // DOT notation
// console.log(myCountry["population"] - 2); // Bracket notation

// LESSON 10 - OBJECT METHODS
// const myCountry = {
//   country: "Indonesia",
//   capital: "Jakarta",
//   language: "Indonesian",
//   population: 270,
//   neighbours: ["Singapore", "Thailand", "Malaysia"],

//   describe: function () {
//     console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
//   },
// };
// myCountry.describe(); // as always, if you're calling a function, if it does not have a return statement, console.log() will generate undefine. If the function has a console.log() statement, it will just need to get called on via it's name and not through another console.log.

// myCountry.checkIsland = function () {
//   this.isIsland = this.neighbours.length === 0 ? true : false;
//   return this.isIsland;
// };
// console.log(myCountry.checkIsland());
// console.log(myCountry.isIsland); // checkIsland() needs to get called first before the isIsland property can display its value. If not, isIsland property will display Undefined.


// Review 1 - FUNCTION TO OBJECTS
// Functions
// const describeCountry2 = (country, population, capitalCity) => {
//   return (`${country} has ${population} million people and its capital city is ${capitalCity}`);
// }

// const china = describeCountry2("China", 1000, "Shanghai");
// console.log(china);

// const japan = describeCountry2("Japan", 126, "Tokyo");
// console.log(japan);

// const korea = describeCountry2("Korea", 51, "Seoul");
// console.log(korea);

// // Functions Declarations vs. Expressions
// const arrowPercentageOfWorld2 = population => (population / 7900) * 100;

// const dragon = arrowPercentageOfWorld2(1000);
// const whiteApe = arrowPercentageOfWorld2(126);
// const turtle = arrowPercentageOfWorld2(51);
// console.log(dragon, whiteApe, turtle);

// // Arrow Functions
// const arrowPercentageOfWorld3 = population => {
//   const countryPopulation = ((population / 7900) * 100) + "%";
//   // return `Based on the population, the country contributes to ${countryPopulation}% of the world population`;
//   return countryPopulation;
// }

// let chinaDrag = arrowPercentageOfWorld3(1000);
// console.log(chinaDrag);

// // Function Calling Other Functions
// const describePopulation = (country, countryPopulation) => {
//   const percentWorld = arrowPercentageOfWorld3(countryPopulation);
//   return `${country} has ${countryPopulation} million people, which is about ${percentWorld}%.`;
// }

// let chinaDrag1 = describePopulation("China", 1000);
// console.log(chinaDrag1);

// // Introduction to Arrays
// const placeToLive = new Array(1000, 126, 51);
// console.log(placeToLive.length === 4);
// // placeToLive[1] + 2;
// console.log(placeToLive[1] + 2); // to increase the value of a data type, you would need to use function or compute it via console.log(). Line 318 will not work.
// const percentagesNext = [arrowPercentageOfWorld3(placeToLive[0]), arrowPercentageOfWorld3(placeToLive[1]), arrowPercentageOfWorld3(placeToLive[2])];
// console.log(percentagesNext);

// // Basic Array Operations (Methods)
// const neighboursNext = ["Japan", "Russia", "North Korea"];
// neighboursNext.push("Utopia");
// neighboursNext.pop("Utopia");
// console.log(neighboursNext);
// if (neighboursNext.includes("Germany")) {
//   console.log("It's around European");
// } else {
//   console.log("Probably not a central European country!")
// }

// // neighboursNext[1] = "Soviet Union";
// neighboursNext[neighboursNext.indexOf("Russia")] = "Soviet Union"; // this way is much better since you will let the code find it rather than you having to find the index of the Array.
// console.log(neighboursNext);

// // Introduction to Objects
// const myCountryNext = {
//   country: "Korea",
//   capital: "Seoul",
//   language: "Korean",
//   population: 51,
//   neighbours: neighboursNext,
// }

// console.log(myCountryNext);

// // DOT vs. Bracket Notation
// console.log(`${myCountryNext["country"]} has ${myCountryNext["population"]} million ${myCountryNext.language}-speaking people, ${myCountryNext["neighbours"].length} neighboring countries and a capital called ${myCountryNext["capital"]}.`);

// myCountryNext.population += 2;
// console.log(myCountryNext.population);
// myCountryNext["population"] -= 2;
// console.log(myCountryNext);

// Coding Challenge 3

// Re-do from Fundamentals Part 1
// // Test Data 1
// const markHeight1 = 1.69;
// const markWeight1 = 78;
// const johnHeight1 = 1.95;
// const johnWeight1 = 92;

// const bmiMark1 = 78 / 1.69 ** 2;
// console.log(bmiMark1);
// const bmiJohn1 = 92 / 1.95 ** 2;
// console.log(bmiJohn1);
// const markHigherBMI1 = bmiMark1 > bmiJohn1;
// console.log(markHigherBMI1);

// // Test Data 2
// const markHeight2 = 1.88;
// const markWeight2 = 95;
// const johnHeight2 = 1.76;
// const johnWeight2 = 85;

// const bmiMark2 = markWeight2 / markHeight2 ** 2;
// const bmiJohn2 = johnWeight2 / johnHeight2 ** 2;
// console.log(bmiMark2, bmiJohn2);
// const markHigherBMI2 = bmiMark2 > bmiJohn2;
// console.log(markHigherBMI2);

// Fundamentals Part 2 - Coding Challenge 3
// const mark = {
//   firstName: "Mark",
//   lastName: "Miller",
//   mass: 78,
//   height: 1.69,
// };
// console.log(mark);

// const john = {
//   firstName: "John",
//   lastName: "Smith",
//   mass: 92,
//   height: 1.95,
// };
// console.log(john);

// mark.calcBMI = function () {
//   this.BMI = this.mass / this.height ** 2;
//   return this.BMI;
// };
// mark.calcBMI(); // if you put console.log in this, it will only output the same value as the BMI method.
// console.log(mark.BMI) // it is very important that the calcBMI() method gets called first, because if not calling the BMI property will not work - "undefined" value.

// // Option 1
// john.calcBMI = function () {
//   this.BMI = this.mass / this.height ** 2;
//   return this.BMI;
// };
// console.log(john.calcBMI());

// console.log(`${mark.firstName}'s BMI (${mark.BMI}) ${mark.BMI > john.BMI ? "is" : "is not"} higher than ${john.firstName}'s BMI (${john.BMI})!`);

// // Option 2
// if (mark.BMI > john.BMI) {
//   console.log(`${mark.firstName}'s BMI (${mark.BMI}) is higher than ${john.firstName}'s BMI (${john.BMI})!`);
// } else {
//   console.log(`${john.firstName}'s BMI (${john.BMI}) is higher than ${mark.firstName}'s BMI (${mark.BMI})!`);
// };

// ITERATION FOR THE LOOP

// for (let number = 1; number <= 50; number++) {
//   console.log(`Voter number ${number} is currently voting`);
// }

// // LOOPING ARRAYS, BREAKING, AND CONTINUING



// const populations2 = [10, 1441, 332, 83];
// const percentages2 = [];
// for (let i = 0; i < populations2.length; i++) {
//   const perc = percentageOfWorld1(populations2[i]); // make sure to include the array position.
//   percentages2.push(perc);
// }

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// console.log(percentages2);

// LOOPING BACKWARDS & LOOPS IN LOOPS
// const listOfNeighbours = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden", "Russia"]
// ];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//   for (let y = 0; y < listOfNeighbours[i].length; y++) {
//     console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
//   }
// }

// WHILE LOOP
// const populations = [10, 1441, 332, 83];
// const percentages3 = [];

// let i = 0;
// while (i < populations.length) {
//   const perc = percentageOfWorld1(populations[i]);
//   percentages3.push(perc);
//   i++;
// };

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// console.log(percentages3);

