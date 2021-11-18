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

// ||(or)
console.log(`or: ${value1 || value2 || check()}`);
//                                    check() : 시간 낭비하다가 true 반환 
function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log(':0');
  }
  return true;
}