/* console.log() : console에게 메세지를 보내는 역할 */
/* 숫자(Integer) 또는 String(문자열)을 담아서 보낼 수 있다.
   logging : console에 ()안의 값을 출력하는 것*/
console.log();

/* Double Quotation && Single Quotation 둘 다 사용 가능 ("+'' 으로 사용은 불가능)*/
console.log("lalalalala");
console.log('lalalalala');

/* Variable*/
console.log(5 + 2);
console.log(5 * 2);
console.log(5 / 2);
// 결과 값은 잘 나오지만, 값을 바꾸려면 다 바꿔야 하기 때문에 더 간단하게 고치자.

// const(constant) : 상수, '변하지 않는 값'을 의미, 계속 유지 되는 값
// a,b를 사용하여 계산하기
const a = 5;
const b = 2;

console.log(a + b);
console.log(a * b);
console.log(a / b);

// variable rule : variable cannot have a space
// my name : error

// myName (javascript) : camel_case
// my_name (Python) : snake_case
// + Python에서는 const와 ;(세미콜론)을 사용하지 않는다. 그냥 myName = "yeji" 라고 작성
const myName = "yeji";

console.log("hello " + "yeji");
console.log("hello " + myName);
// 두 실행 결과 모두 "hello yeji" 출력