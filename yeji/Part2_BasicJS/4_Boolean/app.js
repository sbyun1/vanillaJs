// DataType
// number, String
// + boolean (true | flase)
// + none existing | undefined(none defined) | null(nothing)

// boolean : ture | false
// In the Computer, 0 means Off / 1 means On

// true, false 값은 "" 안에 작성하는 것이 아니라, 값 그대로 작성
const amIFat = true;
console.log(amIFat);

// null (변수에 아무것도 없다는 것, nothing)
  // false와는 다른 이유 : false는 false라는 값이 존재하는 것, null은 아무 것도 없다는 것을 의미
  // 비어있다기보다는, 아무 것도 없는 상태로 채워진 것이라 생각하자
  // null never happens automatically (null 값은 절대 자연적으로 발생하지 않는다는 것을 기억하자)
  // variable안에 어떠한 것이 없다는 것을 확실히 하기 위해 사용하는 것

// undefined
  // const amIFat = null;  -> amIFat이라는 variable 안에 null이라는 값이 들어가 있는 것("값은 있지만, 아무 것도 아닌 것")
  // 어떤 variable이 memory에 존재하지만, 값이 없는 것
let something; // something이라는 variable을 만들고 있지만, 값을 넣지는 않았음
console.log(something);
// something에 값을 넣지 않았기 때문에 undefined 출력

/* 정 리 */
/* null : variable이 있고, 값은 "비어있음" */
/* undefined : variable이 있고, 값이 없음 */