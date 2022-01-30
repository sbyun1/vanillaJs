// 2.1 ~ 2.3
// const --> constant : cannot change
// let: want to create a new one
const a = 5;
const b = 2;
let myName = "noa";
console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);
myName = "noasued";
console.log("your new name is " + myName);
//always const, sometimes let, never var

//
// 2.4 boolean
const amIFat = null;
let something;
console.log(amIFat);
console.log(something);

//
// 2.5 array
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"]; //to-do list에 들어감
//get item from array
console.log(daysOfWeek);

// add one more day to the array : push()
daysOfWeek.push("sun");
console.log(daysOfWeek);

const toBuy = ["potato", "tomato"];
toBuy.push("orange");
console.log(toBuy[2]);

//
//2.6 object
const player1 = {
  //property
  name: "noa",
  points: 10,
  fat: false,
  handsome: true,
};
console.log(player1);
//console.log(player.name);
//console.log(player["name"]);
player1.fat = true;
player1.lastName = "tomato"; //property를 추후 생성할 수 있음
player1.points = player1.points + 15;
console.log(player1.points);

//
// 2.7 ~ 2.8 function : 반복해서 사용할 수 있는 코드 조각
function sayHello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}
sayHello("noa", 10);
sayHello("dal", 23);
sayHello("lynn", 21);

function plus(a, b) {
  console.log(a + b);
}
function divide(a, b) {
  console.log(a / b);
}
plus(60, 8);
divide(98, 20);

const player = {
  name: "noa",
  sayHello: function (otherPersonsName) {
    console.log("hello " + otherPersonsName + " nice to meet you!");
  },
};
player.sayHello("lynn");
player.sayHello("esther");

//
// 2.9 Recap
// type : String, integer, boolean, null
// variable : const, let / want to update ? then use let, if not use const
// add data into array : push
// change data of index: 
const toBuy1 = ["potato", "tomato", "pizza"];
console.log(toBuy1);
toBuy1[2] = "water";
console.log(toBuy1);
toBuy1.push("meat");
console.log(toBuy1);

// 2.10 Recap
// save properties
const player2 = {
  name: "noa",
  age: 30,
};
console.log(player2);
player2.name = "noasued";
console.log(player2);
player2.sexy = "soon"; //create new property
console.log(player2);

// function : capsulate code ..
function plus2(potato, salad) {
  console.log(potato + salad);
}
plus2(5, 10);
plus2(1.445, 8989);

//simple homework
const calculator = {
  plus: function (a, b) {
    return (a + b);
  },
  minus: function (a, b) {
    return (a - b);
  },
  times: function (a, b) {
    return (a * b);
  },
  divide: function (a, b) {
    return (a / b);
  },
  power: function (a, b) {
    return (a ** b);
  },
};
const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);

console.log("plusResult: " + plusResult);
console.log("minusResult: " + minusResult);
console.log("timesResult: " + timesResult);
console.log("divideResult: " + divideResult);
console.log("powerResult: " + powerResult);
// calculator.minus(8, 6);
// calculator.divide(30, 7);
// calculator.power(6, 8);


const age = 36;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}
//get the result as code
const krAge = calculateKrAge(age);
console.log("krAge: " + krAge);


//
// conditional ( if )
const age2 = parseInt(prompt("How old are you?")); // <-- very old function.

//if age is NaN, input your age again
if (isNaN(age2) || age2 < 0) {
  console.log("Please write a real positive number.");
} else if (age2 < 18) {
  console.log("You are too young.");
} else if (age2 >= 18 && age2 <= 50) {
  console.log("You can drink.")
} else if (age2 > 50 && age2 <= 80) {
  console.log("You should exercise.");
} else if (age2 === 100) {
  console.log("Wow you are wise.");
} else if (age2 > 80) {
  console.log("You can do whatever you want.")
}

