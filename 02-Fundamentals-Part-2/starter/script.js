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
//   return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const orangeJuice = fruitProcessor(2, 4);
// console.log(orangeJuice);

//function declaration
// function calcAge1(birthyear) {
//   return 2037 - birthyear;
// }

// const age1 = calcAge1(1997);
// console.log(age1);

// // function expression

// const calcAge2 = function (birthyear) {
//   return 2037 - birthyear;
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
//   return `${firstname} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1997, "Abu"));
// console.log(yearsUntilRetirement(2018, "Bright"));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangesPieces = cutFruitPieces(oranges);

//   //   console.log(apples, oranges);
//   const juice = `juice with ${applePieces} pieces of apple and ${orangesPieces} pieces of orange`;
//   return juice;
// }
// // const appleJuice = fruitProcessor(5, 0);
// // console.log(appleJuice);

// // const orangeJuice = fruitProcessor(2, 4);
// console.log(fruitProcessor(2, 3));

const yearsUntilRetirement = function (birthyear, firstname) {
  const age = 2021 - birthyear;
  const retirement = 65 - age;
  return `${firstname} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1997, "Abu"));
console.log(yearsUntilRetirement(2018, "Bright"));
