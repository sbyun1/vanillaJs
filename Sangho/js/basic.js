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
/*
// objects == 내용 player. < 접근 방식
// player[0] == name
// player[1] == points
const player = {
    //property
    name: "sangho",
    points: 10,
    fat: true,
};
console.log(player);
console.log(player.name);
// update
player.fat = false; // 내용 변경
player.lastName = "potato"; // object 추가
console.log(player);
*/
// Functions part One
// functions > 반복해서 할 수 있는 동작 함수
function sayHello(name0fPerson, age){
    console.log("Hello my name is "+ name0fPerson+" and I'm "+age);
    
}

sayHello("sangho", 20);
sayHello("dal", 30);
sayHello("cal", 40);

function plus(a, b){
    console.log(a+b);
}
function divide(a, b){
    console.log(a / b);
}

plus(1,3);
divide(98, 20);

const player = {
    name: "sangho",
    sayHello: function(otherPersonsName){
        console.log("hello "+ otherPersonsName + " nice to meet you");
    },
};
console.log(player.name);
player.sayHello("lynn");


// Recap
const player1 = {
    name: "Nico",
    age: 98,
};

console.log(player1, console);

function plus(potato, salad){
    console.log(potato + salad);
}

plus(5, 10);
plus(1.333, 9898);
plus(9898, 1.3453)

const calculator = {
    add: function(a,b){
        console.log(a+b);
    },
    divide: function(a,b){
        console.log(a/b);
    },
    powerof: function(a,b){
        console.log(a**b);
    },
};
calculator.add(5, 1);
calculator.divide(4, 2);
calculator.powerof(3,4);


const age = 98;
function calculateKrAge(age0fForeigner){
  age0fForeigner + 2;
  return "hello"
};
const krAge = calculateKrAge(age);

console.log(krAge);