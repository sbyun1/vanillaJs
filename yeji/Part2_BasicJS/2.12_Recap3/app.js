/* 복습 */
// = (equal) : value를 할당하는 것 / [age = parseInt()를 한 value를 할당하는 것, 같다는 뜻]
// === : "age가 100이라면?"을 확인하는 것

// javascript는 Top to Bottom이기 때문에 else if문의 순서 중요

const age = parseInt(prompt("How old are you?"));

if(isNaN(age) || age < 0){
  console.log("Please write a real positive number.");
}else if(age < 18){
  console.log("You are too young.")
}else if(age >= 18 && age <= 50){
  console.log("You can drink.");
}else if(age > 50 && age <= 80){
  console.log("You should exercise");
}else if(age === 100){
  console.log("wow you are wise");
}else if(age > 80){
  console.log("You can do whatever you want");
}

/*
}else if(age > 80){
  console.log("You can do whatever you want");
}else if(age === 100){
  console.log("wow you are wise");
}
만약, 이 순서라면 conditional이 중첩되기 때문에 숫자 "100" 입력 시 => age > 80 조건에 만족함
Top to Bottom에 의해 위의 else if문이 먼저 실행되므로 
"wow you are wise"가 아닌 "You can do whatever you want"가 실행된다.
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// isNaN() : return boolean (true || false)

// 숫자(number)라면 ? => !=NaN => false
// 숫자가 아니라면 ? => ==NaN => true

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* && (and, both of them) 
    true && true      => true
    true && false     => false
    false && true     => false
    false && false    => false
  || (or, one of them)
    true || true      => true
    true || false     => true
    false || true     => true
    false || false    => false
*/

// ex. 더 많은 condition을 추가해보자
if((a && b) || (c && d) || (x || y)){
  
}