// conditional (조건문)

// prompt(message(String), default) : 사용자에게 창을 띄울 수 있도록 해줌, 사용자에게 message를 띄워주고 값을 넣으라고 할 것
// prompt를 사용하지 않는 이유 : CSS를 적용시킬 수 없다.(아주 오래된 방법)
// prompt 진행 시, javascript는 잠시 멈춰있는 상태로 계속 loading중으로 표시됨
const age = prompt("How old are you?");
console.log(age); 

// value의 type을 알고 싶다면 ?
// "typeof"
// typeof 사용법 : typeof variableName (typeof + 공백 한 칸 + variable)
console.log(typeof age);

// 한 type을 받아서 다른 type으로 변경하기
// "parseInt()" : String => int
// ex 1)
console.log(age, parseInt(age));

// ex 2)
parseInt("15");
console.log("15", parseInt("15"));

// parseInt()를 사용해 String을 int로 바꾸게 되면 -> 숫자의 크기 비교 可
// parseInt()는 String을 처리할 수 없음 => NaN(Not a Number) 출력

// 맨 위의 코드를 수정해보자
// function 2개 사용 (parseInt와 prompt)
// function은 내부에서 외부 순서로 실행 : prompt 실행 후 -> parseInt 실행
const age2 = parseInt(prompt("How old are you?"));
console.log(age2);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// isNaN() : 하나의 argument(인자)를 주면 number인지 아닌지를 알려주는 것 / boolean type 반환 : true | false
console.log(isNaN(age2));
// false 반환 : number가 아닌 것(NaN)이 아니라는 뜻 (="숫자"라는 것)

// number : false (NaN이 아니다)
// String : true (NaN 이다)


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// if | if ~ else | if ~ else if ~ else

/*
if(condition){
  //condition === true일 경우, 실행될 코드
}
*/

/* 
if(condition){
  //condition === true일 경우, 실행될 코드
}else{
  // condition === false일 경우, 실행될 코드
}
*/

/* 
if(condition){
  //condition === true일 경우, 실행될 코드
}else if{
  // condition === false일 경우, 실행될 코드
}else{
  // if, else if의 condition이 모두 false일 때 실행될 코드
}
*/


// if ~ else
const age3 = parseInt(prompt("How old are you?"));

if(isNaN(age3)){
  console.log("Please write a number");
}else{
  console.log("Thank you for writing your age.");
}

/* 순 서 */
/*
 1. prompt()에서 String을 받아옴 (여기서 String은 숫자(ex.15) 또는 숫자가 아닌 것(ex.asdfasdf...)이 될 수 있음)
 2. parseInt()을 사용해 prompt()에서 받아온 String을 number로 바꾸려고 시도함
    parseInt()안에 String일 경우, parseInt는 이것을 number로 변환하지 못함 [대신, NaN으로 변환하여 보여줌(Not a Number)]
 3. age3가 number인지 아닌지 알기 위해, isNaN() function을 사용할 수 있음
    isNaN() function 사용하기 위해, 호출 | 첫 번째 argument는 number여야 함 
    isNaN()이 반환하는 return 값은 true | false 
      [true : variable is "not number"]
      [false : variable is "number"]
      
    ex. isNaN(age) == true 인 경우, "Please write a number" 출력
        isNaN(age) == false 인 경우, "Thank you for writing your age." 출력
*/

// if ~ else if ~ else
const age4 = parseInt(prompt("How old are you?"));

if(isNaN(age4)){
console.log("Please write your age.");  // age4가 number가 아니라면 실행
}else if(age4 < 18){                       // number라면 아래의 조건으로 이동하여 다른 condition 확인
console.log("You are too young.");
}else{                                    // else 문이 실행되기 위해서는 if, else if의 조건이 모두 false여야 함
console.log("You can drink.");
}

// if ~ else if ~ else if ~ 
// && (and) / || (or)
const age5 = parseInt(prompt("How old are you?"));

if(isNaN(age5) || age5 < 0){
console.log("Please write a real positive number.");
}else if(age5 < 18){
console.log("You are too young.")
}else if(age5 >= 18 && age5 <= 50){
console.log("You can drink.");
}else if(age5 > 50 && age5 <= 80){
console.log("You should exercise");
}else if(age5 > 80){
console.log("You can do whatever you want");
}else{
console.log("You can't drink.");
}