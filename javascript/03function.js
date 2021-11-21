// Function //
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// *** one function === one thing ***
// naming : doSomething, command 형태, verb 형태로
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello() {
  console.log('Hello');
}
printHello(); // Hello만 출력되므로 딱히 쓸모는 없는 함수

//parameter로 message를 전달하면 전달된 메세지를 출력하도록 하자
function log(message) {
  console.log(message);
}
log('Hello@'); //log함수 호출하며 원하는 메세지 입력
//Javascript 에서는 type이 없기 때문에 함수 자체의 interface만 봤을 때 
//message가 String을 전달해야 하는지 숫자를 전달해야 하는지 명확하지 않다.
log(1234);
//출력에 문제는 없지만, 다른 함수에서 type이 중요한 경우에는 난해할 수 있다.
//규모 있는 프로젝트나 현업에서 다양한 개발자들과 협업을 하거나 
//우리가 작성한 것을 나중에 라이브러리 형태로 API를 제공해야 할 때
//Typescript를 사용하면 좋다.

// 2. Parameters
// premitive parameters : passed by value
// object parameters : passed by reference
function changeName(obj) {
  obj.name = 'coder'; //전달된 obj의 이름을 coder로 변경
}
const noa = { name: 'noa' };
changeName(noa);
console.log(noa);

// 3. Default parameters ( added in ES6 )
function showMessage(message, from = 'unknown') { //parameter 옆에 원하는 default값 설정 가능
  /*
  if(from===undefined){
    from='unknown';
  }
  */
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args) { // ... : rest parameter 배열형태로 전달됨
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  /*
  for(const arg of args){
    console.log(arg);
  }
  */
  /*
  args.forEach(arg) => console.log(arg);
  */
}
printAll('dream', 'coding', 'noa');

// 5. Local scope
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello';
  console.log(message); // local variable
  console.log(globalMessage);

  function printAnother() {
    console.log(message);
    let childMessage = 'hello';
  }
  // console.log(childMessage); //error
  return undefined; // 모든 함수의 default. 굳이 표시해주지 않아도 됨.
}
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); //3
console.log(`sum:${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic ...
  } //블럭 안에 로직 작성 시 가독성이 떨어짐 
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return; // 조건이 맞지 않을 때 빨리 return하여 함수 종료
  }
  //long upgrade logic ...
}

//////////////////////////////////////
// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined.(hoisted)
// a function expression is created when the execution reaches it.
const print = function () { //함수를 선언함과 동시에 바로 print에 할당
  // function has no name : anonymous function
  // function has name : named function
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}

//anonymous function
const printYes = function () {
  console.log('yes!');
}
// named function
// better debugging in debugger's stack traces
// recursions - 함수 자신 안에서 함수 계속 호출 -> 프로그램이 죽을 수 있으니 하지 말 것
const printNo = function print() {
  console.log('no!');
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
//함수를 간결하게 만들어줌
// always anonymous
const simplePrint1 = function () {
  console.log('simplePrint');
}
// 위 함수를 아래처럼 작성 가능
const simplePrint2 = () => console.log('simplePrint!');

const add1 = (a, b) => a + b;
const add2 = (a, b) => {
  // do something more
  return a * b;
};

// IIFE : Immediately Invoked Function Expression
function hello1() {
  console.log('IIFE');
}
hello1();
//보통 함수를 선언하면 선언한 함수를 호출해주어야 하는데, 
//선언함과 동시에 바로 호출하려면 아래와 같이 함수를 괄호로 묶고 호출하듯 만들어주면 됨.
(function hello2() {
  console.log('IIFE');
})();

// Quiz !
// function calculate(command, a, b)
// command : add, substract, divide, multiply, remainder
