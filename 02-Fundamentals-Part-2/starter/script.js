"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I am allowed to drive🚙");

// function logger() {
//   console.log("My name is Bright");
// }

// //calling a function

// logger();
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   //   console.log(apples, oranges);
//   const juice = `juice with ${apples} apples and ${oranges} oranges`;
//   console.log( juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const orangeJuice = fruitProcessor(2, 4);
// console.log(orangeJuice);

//function declaration
// function calcAge1(birthyear) {
//   console.log( 2037 - birthyear;
// }

// const age1 = calcAge1(1997);
// console.log(age1);

// // function expression

// const calcAge2 = function (birthyear) {
//   console.log( 2037 - birthyear;
// };
// const age2 = calcAge2(1997);
// console.log(age2);

//Arrow function
// const calcAge3 = (birthyear) => 2037 - birthyear;
// const age3 = calcAge3(1997);
// console.log(age3);

// const yearsUntilRetirement = (birthyear, firstname) => {
//   const age = 2021 - birthyear;
//   const retirement = 65 - age;
//   console.log( `${firstname} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1997, "Abu"));
// console.log(yearsUntilRetirement(2018, "Bright"));

// function cutFruitPieces(fruit) {
//   console.log( fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangesPieces = cutFruitPieces(oranges);

//   //   console.log(apples, oranges);
//   const juice = `juice with ${applePieces} pieces of apple and ${orangesPieces} pieces of orange`;
//   console.log( juice;
// }
// // const appleJuice = fruitProcessor(5, 0);
// // console.log(appleJuice);

// // const orangeJuice = fruitProcessor(2, 4);
// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthyear) {
//   console.log( 2037 - birthyear;
// };

// const yearsUntilRetirement = function (birthyear, firstname) {
//   const age = calcAge(birthyear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstname} retires in ${retirement} years`);
//     console.log( retirement;
//   } else {
//     console.log(`${firstname}, has already retired`);
//     console.log( -1;
//   }

//   //console.log( `${firstname} retires in ${retirement} years`;
// };

// // console.log(yearsUntilRetirement(1997, "Abu"));
// // console.log(yearsUntilRetirement(2018, "Bright"));

// console.log(yearsUntilRetirement(1997, "Abu"));
// console.log(yearsUntilRetirement(1970, "Bright"));

// const avgDolphins= function (44 + 23 + 71) / 3;
const calcAverage = (a, b, c) => (a + b + c) / 3;

let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolphins);
console.log(avgKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins wins 🏆 ${avgDolphins}, vs ${avgKoalas}`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas wins 🏆 ${avgKoalas}, vs ${avgDolphins}`);
  } else {
    console.log("No one wins the 🏆 ");
  }
};
checkWinner(avgDolphins, avgKoalas);
checkWinner(576, 111);

avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);

checkWinner(avgDolphins, avgKoalas);
