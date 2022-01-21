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
// boolean
const amIFat = null;
let something;
console.log(amIFat);
console.log(something);

//
// array
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"]; //to-do list에 들어감
//get item from array
console.log(daysOfWeek);

// add one more day to the array
daysOfWeek.push("sun");
console.log(daysOfWeek);

const toBuy = ["potato", "tomato"];
toBuy.push("orange");
console.log(toBuy[2]);

