//function은 코드를 캡슐화해서 실행을 여러번 할 수 있게 해줌
function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

//argument(인수): function을 실행하는 동안 정보를 function 에게 보낼 수 있는 방법으로 소괄호 안에 위치
//argument 여러 개 받을 수 있음

sayHello("jiyo", 10);
sayHello("nico", 23);
sayHello("lynn", 12);


/* calculator */
function plus(firstNumber, secondNumber){
    console.log(firstNumber + secondNumber);
}

function divide(firstNumber, secondNumber){
    console.log(firstNumber / secondNumber);
}

plus(1,2);
divide(4,2);


/* object 안에 function 생성 -> player.sayHello() 형식 */
const player = {
    name: "jiyo",
    sayHello: function(otherPersonsName){
        console.log("Hello " + otherPersonsName + " nice to meet you");
    },
}

player.sayHello("jiyo");
player.sayHello("nico");


/* 연습 */
const helloBot = {
    sayHello: function(player){
        console.log("Hello! " + player);
    },
    sayBye: function(player){
        console.log("Bye " + player + "...");
    }

};

helloBot.sayHello("lalala");
helloBot.sayHello("dall");
helloBot.sayBye("lynn");