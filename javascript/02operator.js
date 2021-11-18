// 1. String concatenation
console.log('my' + ' cat'); // String + String = new String
console.log('1' + 2); // String + int = String changed to int 
console.log(`string leterals: 1+2 = ${1 + 2}`);
//                                  $ : 변수 값을 계산해서 String으로 포함해서 문자열 생성
//           string leterals : 중간에 줄바꿈을 하거나 싱글쿼테이션 넣어도 문자열로 바뀌어서 나옴
console.log("noa\'s \nbook") // \n 줄바꿈, \t tab key

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3);

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter +1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter ;
// counter = counter+1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operator
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators : ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;

// ||(or), find the first truthy value
console.log(`or: ${value1 || value2 || check()}`);
//                                    check() : 시간 낭비하다가 true 반환 
// value1 : false  value2 : false

// &&(and), find the first falsy value
console.log(`and: ${value1 && value2 && check()}`);
//heavy한 operation일수록 제일 뒤에 배치

// often used to compress long if-statement
// nullableObject && nullableObject.somthing
/*if (nullableObject != null) {
  nullableObject.somthing;
}*/

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log(':0');
  }
  return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion(타입 변경해서 검사)
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// == strict equality, no type conversion(타입이 다르면 다름)
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference(obj는 memory에 탑재될 때 reference 형태로 저장)
const noa1 = { name: 'noa' };
const noa2 = { name: 'noa' };
const noa3 = noa1;
console.log(noa1 == noa2);
console.log(noa1 === noa2);
console.log(noa1 === noa3);
//noa1과 noa2는 똑같은 데이터가 들어있는 obj이지만 메모리에는 각각 다른 ref 가리키고 그 ref들은 각각 다른 obj를 가리킴

// equality - puzzler
console.log(0 == false); //true : 0, null, undefined, ''(empty String)은 모두 false로 간주될 수 있음
console.log(0 === false); //false : 0은 boolean이 아니므로 typescript equality를 이용하게 되면 false
console.log('' == false); //true
console.log('' === false); //false : ''도 boolean type이 아니므로
console.log(null == undefined); //true
console.log(null === undefined); // false : type이 다름

// 8. Conditional Operator : if
// if, else if, else
const name = 'noa';
if (name === 'noa') {
  console.log('Welcome, Noa!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unknown');
}

// 9. Ternary Operator : ?
// condition ? value1 : value2;
console.log(name === 'noa' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'Chrome';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break;
  default:
    console.log('same all!');
    break;
}

// 11. Loops 
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for:${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  //inline variable declaration
  console.log(`inline variable for:${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i:${i}, j:${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers(use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(`q1. ${i}`);
}
// Q2. iterate from 0 to 10 and print numbers until reaching 8(use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}