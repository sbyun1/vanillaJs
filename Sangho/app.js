// const > 상수 (변하지 않는 수)
// let > 변할 수 있는 변수 선언
const a = 5; 
const b = 2;
let myName = "sangho";

console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("hello "+ myName);

myName = "sanggo"; // let으로 하는 것을 업데이트를 통해 수정

console.log("your new name is "+ myName);


// Booleans
const amIFat = false;
let something;
const amIFat2 = null;

console.log(amIFat);
console.log(amIFat2);


// Arrays
const days0fWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
const nonsense = [1, 2, "hello", false, null, true, undefined, "sangho"]

// get Item from Array
console.log(days0fWeek);

// Add one more day to the array
days0fWeek.push("sun");

console.log(days0fWeek);





