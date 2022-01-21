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



//2. booleans
// null: nothing
// undefined: variable exists but have no value
const amIFat = null;
let something; 
console.log(something, amIFat);
