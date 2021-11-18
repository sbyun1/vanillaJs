// Function
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
}
printMessage();