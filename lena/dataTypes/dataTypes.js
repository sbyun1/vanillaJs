//1. variables
//const: non-changeable
// *** normally use 'const' by default****
const a = 5;
const b = 2;

// let: changeable
let myName = "lena";

// var: old way of creating variable, could be changed anywhere

// if create with 'const' and then later try to change, 
// it will show and error: 'const' cannot be changed

//conventional way name a variable in JS:camel case

console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("hello " + myName);

myName = "subin";
console.log("korean name is " + myName);

//------------------------------------------
//2. booleans : null, undefined, true, false

// null: nothing: never happens automatically
// undefined: variable exists in memory but have no value
const amIFat = null;
let something; 
console.log(something, amIFat);
//------------------------------------------
//3. Array : list of things: all the values hold the same meaning 

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
console.log(daysOfWeek);

//Get item from array
console.log(daysOfWeek[4])

//push() : add one more day to an array
daysOfWeek.push("sun");
console.log(daysOfWeek);
//------------------------------------------
//4. Object
const playerName = "lena";
const playerPoints = 121212;
const playerCute = true;
const playerFat = "nope";

//const player = ["lena", 121212, true, "nope"]; //cannot tell which value is which

const player = {
    name : "lena",
    points : 10,
    cute : true,
};
console.log(player);

console.log(player.name);
console.log(player["name"]);

player.cute = false; //update something inside const
player.lastName = "potato"; //adding property to an object
console.log(player);

player.points = player.points + 15;
console.log(player.points);













