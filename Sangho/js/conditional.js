const age = parseInt(prompt("How old are you")); // 오래된 메세지 폼.

console.log(age); // parseInt > string 변형 int

// 숫자를 입력하라는 경고문 출력


if(isNaN(age)){
    /// condition === true
    console.log("Please write a number")
} else{
    console.log("Thank you for writing your age.")
} 

 // 조건문 추가
 console.log("<조건문 추가>")

if(isNaN(age) || age < 0){
    /// condition === true
    console.log("Please write a real positve number");
} else if(age < 18){
    console.log("You are too young");
} else if(age >= 18 && age <=50){ // AND 연산자 / OR 연산자 ( && 대신 || 사용)
    console.log("You can drink");
} else if(age>50 && age <=80){
    console.log("you should exercise");
}else if (age > 80){
    console.log("You can do whatever you want.")
}
    
