//function: "way to encapsulate codes"
function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + " and I am " + age);
}

//argument: sending some info to function
sayHello("Lena", 19);
sayHello("Noa", 20);

//calculator
function plus(firstNumber,secondNumber){
    console.log(firstNumber + secondNumber);
}

function divide(a,b){
    console.log(a/b);
}

plus(8,60);
divide(98,20);
////////////////////////////////////////////
const player = {
    name: "Lena",
    sayHello2: function(otherPersonsName){
        console.log("hello! " + otherPersonsName + " nice to meet you");
    },
};

console.log(player.name);
player.sayHello2("Noa");
player.sayHello2("Lena");

//functions inside object
const calc = {
    plus: function(a,b){
       return a+b;
    },
    minus: function(a,b){
        return a-b;
    },
    mult: function(a,b){
        return a*b;
    },
    div: function(a,b){
        return a/b;
    },
    power: function(a,b){
        return a**b;
    }
}

//with return
const plusRes = calc.plus(2,3);
const minusRes = calc.minus(plusRes, 10);
const multRes = calc.mult(10, minusRes);
const divRes = calc.div(multRes, plusRes);
const powRes = calc.power(divRes, minusRes);

const age = 24;
function calcKrAge(ageOfForeigner){
   return ageOfForeigner + 2;
}
const krAge = calcKrAge(age);
console.log(krAge);
