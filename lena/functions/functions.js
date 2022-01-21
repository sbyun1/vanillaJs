//function
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
player.sayHello2("Lena")