// function 내에서 값을 받는 것이 아닌, function 밖에서 값을 받으려면?
// return : function 밖에서도 사용할 수 있는 방법

// ex. user가 ToDo(할 일)를 주면 그 ToDo를 받아서 array에 넣기 -> data를 얻어서 그 data로 무언가를 하는 것

// 8_Recap calculator function에서 실행한 결과 값을 가지고 아무것도 하지 않았기 때문에 이번에는 그 값을 가지고 활용하는 것을 배울 것
// 동일한 코드 작성 후, console.log를 alert로 변경하기 ( alert : 메세지를 경고문으로 보여주는 것 )
const calculator = {
  add: function(a,b){
    alert(a + b);
  },
  minus: function(a,b){
    alert(a - b);
  },
  divide: function(a,b){
    alert(a / b);
  },
  times: function(a,b){
    alert(a * b);
  },
  power: function(a,b){
    alert(a ** b);
  }
};

console.log(calculator.add(2, 3)); 
// alert는 나오지만 관리자모드(F12)에서는 undefined 출력

// function은 나를 위해 무언가를 해주는 것, 내가 function을 20번 호출한다면, 내가 보낸 data를 가지고 20번 alert할 것
// 그러나 대부분의 경우, 우린 function으로 무언가를 해서 function으로부터 결과 값을 받기를 원한다



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 나이 계산하는 function 만들기 */
// function을 어떤 기능을 수행하는 것이라고 생각하기 보다는 어떤 일을 수행하고 그 결과를 알려주는 것
const age = 96;

function calculateKrAge(ageOfForeigner){
//  ageOfForeigner + 2;
  return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age); 
console.log(krAge); // ageOfForeigner + 2 를 했지만 여전히 console에는 undefined 출력 => "return"을 작성하지 않았기 때문!
// 38행에 설정한 것이 45행 age의 argument로 들어갔기 때문에 96 + 2를 한 후 return하는 것


// 만약 return 값을 바꿔서 실행한다면?
function calculateKrAge2(ageOfForeigner2){
  ageOfForeigner2 + 2;
  return "hello";
}

const krAge2 = calculateKrAge2(age); 
console.log(krAge2);
// 이렇게 실행한다면 return값이 hello이기 때문에 hello가 출력
// => 함수 호출 시, return값이 반환되기 때문이다.


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// calculator function 코드를 alert -> return 수정해보자
const calculator2 = {
  add: function(a,b){
    return a + b;
  },
  minus: function(a,b){
    return a - b;
  },
  divide: function(a,b){
    return a / b;
  },
  times: function(a,b){
    return a * b;
  },
  power: function(a,b){
    return a ** b;
  }
};

const addResult = calculator2.add(2, 3);  // calculator2 내부에서 console.log를 작성하지 않았지만, console.log(addResult);를 하면 값을 반환받을 수 있다.
// 서로 의존하게 만드는 코드 작성
const minusResult = calculator2.minus(addResult, 10);       // 5 - 10 = -5
const timesResult = calculator2.times(10, minusResult);     // 10 * -5 = -50
const divideResult = calculator2.divide(timesResult, addResult);  // -50 / 5 = -10
const powerResult = calculator2.power(divideResult, minusResult); // -10 ** -5 = 

console.log(addResult, minusResult, timesResult, divideResult, powerResult);

/*
복습 
  add function이 있는 calculator2 object가 있고, 이 function은 a와 b를 argument로 가진다. (a = 2, b = 3)
  이 function은 a + b, 즉 2 + 3을 return 함
  이 function이 무언가를 return하기 때문에 이 function을 호출하는 코드가 그 function의 반환 값이 된다.
  2 + 3 , 5를 return하기 때문에 addResult(calculator2.add(2, 3))는 5가 된다.

  이 function은 반환 값(return)이 있다면, 함수 실행 시 무언가를 실행하고 끝났을 때 반환 값을 돌려준다.
*/

// function 내에서 console.log를 하는 것과는 큰 차이가 있음
// function의 외부에서 값을 얻은 뒤에 그 값으로 원하는 모든 것을 할 수 있다는 점