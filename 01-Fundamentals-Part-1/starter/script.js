/*
let markMass = 78;
let markHeight = 1.79;

let johnMass = 92;
let johnHeight = 1.95;

markMass = 95;
markHeight = 1.88;

johnMass = 85;
johnHeight = 1.76;

console.log(markMass, markHeight, johnMass, johnHeight);

const markMass = 95;
const markHeight = 1.88;

const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / (johnHeight * johnHeight);

console.log(markBMI, johnBMI);

const markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);

console.log(`John's BMI is higher than Marks!`);
console.log(`John's BMI ${johnBMI}, is higher than Mark's BMI ${markBMI}!`);

let higherBMI;
if (markBMI >= johnBMI) {
  higherBMI = `Mark's BMI ${markBMI}, is higher than John's${johnBMI},!`;
} else {
  higherBMI = `John's BMI ${johnBMI}, is higher than Mark's${markBMI},!`;
}
console.log(higherBMI);

const firstName = "Bright";
const job = "superjojist";
const birthYear = 2019;
const year = 2021;

const bright =
  "I'm " +
  firstName +
  ", a " +
  (year - birthYear) +
  " years old " +
  job +
  "!!!";
console.log(bright);

const brightNew = `I'm ${firstName} a ${year - birthYear} year old ${job} !!!`;
console.log(brightNew);

console.log("string with \n\
multiple \n\
lines");

console.log(`string with
multiple
lines`);


const age = 15;
//const isOldEnough = (age) => 18;

if (age >= 18) {
  console.log("Bright can have a driving license🚙🚚");
} else {
  const yearsLeft = 18 - age;
  console.log(`Bright is too young. Wait another ${yearsLeft} years`);
}


const birthDate = 1997;
let century;
if (birthDate <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

//type conversion
const inputYear = 1997;
console.log(Number(inputYear) + 24);

//type coercion
console.log("I am " + 24 + " years old ");
console.log("2" + "2" + 2);
console.log(20 - "3" + 7);
console.log("23" / "2");
console.log("23" * "2");

let n = "1" + 1;
n = n - 1;
console.log(n);


//falsy values : 0, '', undefined, null, NoN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean("NoN"));
console.log(Boolean(""));
console.log(Boolean({}));

const money = 01;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You must get a job");
}

let height;
if (height) {
  console.log("Hurray!! Height is Defined");
} else {
  console.log("Yakh!!! Height is Undefined");
}

const age = 18;
if (age === 18) console.log(`You are an adult`);

if (age === 18) console.log(`You are an adult (Strict)`);

if (age == 18) console.log(`You are an adult (Loose)`);
const favorite = Number(prompt("What is your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 14) {
  console.log("Yaaah 14 is my favorite number");
} else if (favorite === 7) {
  console.log("Yaaah 7 is my second favorite number");
} else {
  console.log("Number is not 14 or 7");
}


const hasDrivingLicense = true;
const hasGoodVision = false;

console.log(hasDrivingLicense && hasGoodVision);
console.log(hasDrivingLicense || hasGoodVision);

if (hasDrivingLicense && hasGoodVision) {
  console.log("Bright is able to drive");
} else {
  console.log("Bright is not eligible to drive");
}


const dolphine1 = 97;
const dolphine2 = 112;
const dolphine3 = 101;
const averageDoplphinScores = (dolphine1 + dolphine2 + dolphine3) / 3;
console.log(averageDoplphinScores);

const koalas1 = 109;
const koalas2 = 95;
const koalas3 = 106;
const averageKoalasScores = (koalas1 + koalas2 + koalas3) / 3;
console.log(averageKoalasScores);

const minScore = 100;

if (averageDoplphinScores > averageKoalasScores && minScore) {
  console.log("Dolphine wins the trophy🏆");
} else if (averageKoalasScores > averageDoplphinScores && minScore) {
  console.log("Koalas wins the trophy🏆");
} else averageDoplphinScores === averageKoalasScores && minScore;
{
  console.log("They drew");
}

if (averageDoplphinScores > averageKoalasScores) {
  console.log("Dolphine is the winner");
} else if (averageKoalasScores > averageDoplphinScores) {
  console.log("Koalas is the winner");
} else if (averageDoplphinScores === averageKoalasScores) {
  console.log("The result is equal");
} else {
  ("The result is wrong");
}
*/
// const day = "wednesday";

// switch (day) {
//   case "monday":
//     console.log("I work hard");
//     break;
//   case "tueday":
//     console.log("I work extra hard");
//     break;
//   case "wednesday":
//   case "thursday":
//   case "friday":
//     console.log(" I work smart");
//     break;
//   case "saturday":
//     console.log("I watch football");
//     break;
//   case "sunday":
//     console.log("I worship");
//     break;
//   default:
//     console.log("I am just there");
// }
// if (day === "wednesday" && "thursday") {
//   console.log("I work smart");
// }

const age = 24;
// age >= 18
//   ? console.log("I like to drink Alcohol🍾")
//   : console.log("I like to drink water💧");

// const drink = age >= 18 ? "wine🍷" : "water 💧";
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = "wine🍷";
// } else {
//   drink2 = "water 💧";
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? "wine🍷" : "water 💧"}`);

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
