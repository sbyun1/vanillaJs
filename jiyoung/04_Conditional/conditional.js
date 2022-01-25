//prompt(): 아주 오래된 방법으로 잘 사용하지 않음
//css 적용 안 되고 답이 입력될 때까지 js 실행을 일시적으로 멈추기 때문
const age = parseInt(prompt("How old are you?"));

//typeof: 변수 타입 보는 방법
//prompt()에서 string이 default값이기 때문에 숫자를 입력해도 타임은 string으로 나옴
console.log(typeof age);

//parseInt(): string 타입의 변수는 number 타입으로 변환
//ex) "15" -> 15
console.log(typeof "15", typeof parseInt("15"));

/* 예시 */
const ageOfForeigner = prompt("국제 나이로 몇 살?");
const krAge = parseInt(ageOfForeigner) + 2;
console.log("당신의 국제 나이는 " + ageOfForeigner + "이고, 한국 나이는 " + krAge + "입니다.");

//isNaN(): 변수 값이 NaN인지 아닌지를 boolean으로 판변해주는 함수
console.log(isNaN(age));

if(isNaN(age) || age < 0){
    console.log("Please write a real positive number");
}else if(age < 18){
    console.log("You are too young");
}else if(age >= 18 && age <= 50){
    console.log("You can drink");
}else if(age > 50 && age <= 80){
    console.log("You should exercise");
}else if(age > 80){
    console.log("You can do whatever you want");
}