// javascript에서는 variable 만드는 방법 2가지
// 1. const : constant(상수), 값이 바뀔 수 없다는 것 (const cannot change)
// 2. let   : variable 값을 update하고 싶은 경우, let을 사용하여 값을 바꿀 수 있음
//            + create a new variable 때, 사용함
const a = 5;
const b = 2;

// create a new one
let myName = "yeji";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

// 위에서 let으로 myName을 생성했기 때문에, let을 다시 사용할 필요가 없음 -> just update
//updating the variable : 더이상 yeji가 아닌 Yoonyeji로 출력될 것
myName = "Yoonyeji";

console.log("your name is "+ myName);
// + Top to Bottom 흐름 : 위에서 let을 사용해 create한 후, 아래에서 update했기 때문에 console에는 update한 값이 출력됨


/* 우리는 Javascript에서 variable 설정만으로 사람의 의도(human meaning)를 파악할 수 있다. */
/* const => variable 선언(create) 이후에 절대 값을 바꿀 마음이 없다!! */
/* let   => variable을 언제든 뒤에 가서 바꿀 수 있다!! */
// 대부분 const를 사용하고, 언젠가 variable값을 update할 것이라면 특별한 경우 let 사용

/* var */
// fetch 전, 사용하던 var은 not protected by the Language (언어로부터 보호를 받지 못한다.)
// 만약 실수로 var a 사용 시, a 값을 update한 경우 알려주지 않음
