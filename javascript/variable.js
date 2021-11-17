// 1. Use strict
// added ECMAScript 5
// use this for Vanila Javascript
// JavaScript is very flexible == dangerous
//선언되지 않은 값을 할당할 때 잡아주는 등 상식적인 범위 안에서 작업할 수 있도록 해줌.
//성능 개선까지 기대.
'use strict';

// 2. Variable
// let (added in ES6)
let globalName = 'global name';
//항상 메모리에 탑재되므로 최소한으로 쓰기
{
    let name = 'noa';
    console.log(name);
    name = 'hello';
    console.log(name);
}

//var (don't ever use this!!!)
// var hoisting(move declaration from bottom to top)
//    : 어디에 선언했냐에 상관 없이 항상 제일 위로 선언을 끌어올려주는 것
// has no block scope : 블럭을 철저하게 무시함

// 3. Constants (한 번 선언하면 값 변경 불가)
// favor immutable data type always for a few reasons:
// 웬만하면 값 할당 후 변경할 수 없는걸로 사용해라 
//  - security
//  - thread safety
//  - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable Types
// primitive type, single item : number, string, boolean, null, undefined, symbol
// object, box container : single item을 묶어 한 박스로 관리할 수 있게 해줌
// function, first-class function : 함수의 parameter로도 전달 가능, return type으로도 가능
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value:${count},type:${typeof count}`);
console.log(`value:${size},type:${typeof size}`);

// number - special numeric values : infinity, -infinity, NaN(not a number)
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n;
// number형은 over (-2**53) ~ (2**53)만 지원
console.log(`value:${bigInt},type:${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;
//chrome과 firefox에서만 지원됨

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value:${greeting},type:${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals(string)
console.log(`value:${helloBob}, type:${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

//boolean
//false : 0, null, undefined, NaN, ''
//true : any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for object
//자료구조 등에서 고유한 식별자가 필요하거나 동시다발적으로 일어날 수 있는 코드에서 우선순위 주고싶을 때 쓰임
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`)
//                      그냥 출력하면 에러남

// object, real-life object, data structure
const noa = { name: 'noa', age: 20 }; // 잠겨있으므로 바로 값 변경 불가
noa.age = 21; // noa object 안에 있는 name과 age 변수는 다른 값으로 할당 가능

// 5. Dynamic typing : dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5; //string으로 변환
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2'; //숫자로 인식
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0));
// number type으로 변경 후 다시 출력하려 하면 Runtime error!!!