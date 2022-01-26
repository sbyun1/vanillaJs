// Functions(1)
// function : 반복해서 사용할 수 있는 코드 조각 / 어떤 코드를 encapsulation(캡슐화)하여 여러 번 실행할 수 있게 만들어 줌
// function {중괄호} 안의 내용은 function이 실행될 경우, 실행될 코드

// 만약 function이 없는 경우라면?
/*
  console.log("Hello my name is yeji");
  console.log("Hello my name is cherry");
  console.log("Hello my name is straw");
  console.log("Hello my name is berry");
  console.log("Hello my name is Dal");
*/
// So much Copy & Paste
// 전체 코드에서 바뀌는 부분은 이 끝의 이름들 뿐이기 때문에 name부분만 바꿔주면 끝.

/*
  function sayHello(){
    console.log("Hello! my name is C");
  }
  sayHello();
*/

// -> 실행하면 Hello! 만 console에 출력됨

// name을 다르게 받아오고 싶다면, argument(인수)라는 것을 보내야 함
// argument : function을 실행하는 동안 어떤 정보를 function에게 보낼 수 있는 방법
// ex. console.log("hello"); -> function을 실행하면서 data를 보내는 방법을 이미 배웠다.
// (괄호)를 사용했으니 실행 버튼을 누른 것, (data)를 적으면 실행과 동시에 data도 보낸 것

// 이것을 function에 어떻게 적용할 것인가?
// data를 보내는 방법
// sayHello("yeji");
// sayHello("cherry");
// sayHello("straw");
// sayHello("berry");
// sayHello("Dal");

// data를 받는 방법 : function(data)로 작성하기
// nameOfPerson과 age : argument
function sayHello(nameOfPerson, age){
  console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("yeji", 20);
sayHello("cherry", 15);
sayHello("straw", 65);

// 간단한 계산기 만들기
// plus ( + )
function plus(firstNumber, secondNumber){  
  console.log(firstNumber + secondNumber);
}
plus(8,60);
// argument가 없이 plus(); 실행 시, => result : NaN (Not a Number, 숫자가 아님)
// argument 순서에 맞게 8 = firstNumber, 60 = secondNumber 가 되는 것

// console.log(firstNumber);
// 만약, function을 벗어난 곳에서 firstNumber을 호출한다면 error 발생

// divide ( / )
function divide(a, b){
  console.log(a /b);
}
divide(98, 20);

// 
const player = {
  name : "yeji",
  sayHello: function(otherPersonName){
    console.log("hello! " + otherPersonName + " nice to meet you");
  },
};
player.sayHello("yeji");    // sayHello() doesn't take any argument
player.sayHello("cherry");

/* function에게 information(정보)를 보내는 방법을 배웠다 */
// 위의 경우 player.sayHello("~~")가 가능했던 이유 : object 안에 function이 있기 때문에 가능