// Data Type
// number, String(Double Quotation, Single Quotation)

// variable에 값(data)을 저장하는 방법

// variable을 만드는 2가지 option
// 1) const
// 2) let : variable 값을 update하고 싶을 때 사용
const a = 5;
console.log(a);

// const isYejiFat = true; - 아래에서 isYejiFat = false로 update하고 있으니 error 발생
let isYejiFat = true; // -> 이렇게 작성하면 update 성공

isYejiFat = false;
// let isYejiFat = false; -> variable을 create이 아닌 update하는 것이기 때문에 variable 앞에 let을 작성하지 않는 것이 중요!

// variable 사용 시, 지켜야 할 Rule : 항상 const를 사용 (가끔씩 필요할 경우, let 사용 / but, var는 절대 사용하지 말 것)

// variable 안에 다양한 DataType을 저장할 수 있음
// number, String, boolean(true, false), null(비어있는 값), undefined(변수에 값을 부여하지 않은 상태), array(배열, 일종의 list, []로 작성, 어떠한 dataType 모두 작성 가능)
// ex.
  const me = "sexy";
  const days = [1, 2, false, true, null, undefined, "text", me];

// 원한다면 array 안에 있는 item(data)에 접근할 수 있다.
const toBuy = ["potato", "tomato", "pizza"];

toBuy[2]; // pizza 출력
// ex.
console.log(toBuy[2]); // pizza 출력

// array 안의 data update
toBuy[2]  = "water";
console.log(toBuy); // "potato", "tomato", "water" 출력

// array 안의 data insert (맨 끝에 추가)
toBuy.push("meat");
console.log(toBuy); // "potato","tomato","water","meat" 출력

//////////////////////////////////////////////////////////////////////////////
// list  : 공통된 맥락이 있다.
const daysOfWeek = ["mon", "tue", "wed"];  // daysOfWeek array 안의 data들은 같은 종류, 즉 한 주의 요일
// 그러나 문제는, 의미가 있는 property를 저장하려고 할 때가 문제다.
// 연관되어 있는 property들을 그룹으로 묶어서 저장해야할 때, 사용하는 방법 = object 사용

// Object
// object 안의 name, points 등은 일종의 variable이지만, 정식 명칭은 property

const player = {
  name : "yeji",
  age : 98
};
// 이제까지 사용하던 console.log 의 console은 object였다. console에는 많은 property가 있고, 그 중 하나가 log이다.

// 여기서 주의할 점 : JavaScript 특징 (Top to Bottom, 위에서 아래로 코드를 읽기때문에 위에서는 아직 update되지 않은 값 출력)
// player 출력하기
console.log(player); // {name: "yeji", age: 98} 출력

// player.name update
player.name = "Yoonyeji";
console.log(player);   // {name: "Yoonyeji", age: 98} 출력

// object의 item 가져오기
// player.name = "Yoonyeji"; => player의 name property를 가져왔음

// object의 item update
player.sexy = "soon";
console.log(player);   // {name: "Yoonyeji", age: 98, sexy: "soon"} 출력 (name: update, sexy: insert 된 것을 확인)


//////////////////////////////////////////////////////////////////////////////
// function
// : 어떤 코드를 encapsulation(캡슐화)하여 반복해서 사용할 수 있도록 만든 것 (ex.노래를 반복해서 듣는 것)
function plus(){
  console.log(2 + 2);  
  // function 안에 data를 미리 넣어두는 것보다 function 밖에서 data를 넣을 수 있게 만드는 것이 훨씬 좋다.
  // function의 목적 : 여러 가지 일을 같은 코드로 하기 위함이기 때문
}

//functin 실행
//plus;   // -> 아무 것도 뜨지 않음
plus(); // 4 출력

// ex. alert function으로 sending the data
//alert("lalalalala");

// function으로 data 보내기
// function안에서 data 받기 : function(괄호) 괄호 안에 무언가를 적는 것
function plus2(potato, salad){
  // console.log(2 + 2);  => placeholder (potato, salad) -> data를 받을 준비가 되어있는 것뿐, placeholder를 작성하여 값을 받기
  console.log(potato + salad);
}

plus2(5, 10); // 15 출력

// 값을 넣는 순서는 중요 ! (data의 값을 받는 placeholder의 값이 달라지기 때문에)
plus2(1.33453, 9898); // 1.33453 : potato, 9898 : salad
plus2(9898, 1.33453); // 9898 : potato, 1.33453 : salad


// 만약, data를 하나만 받고 싶다면?
function minusFive(potato){
  console.log(potato - 5);
}
// 아래와 같이 여러 argument를 넣어도 상관없음
minusFive(5, 10, 12, 34, 4, 5, 6, 7);  // 0 출력 -> 오직 첫 번째 argument만 받기 때문에

/* 
1) create function : function을 생성
2) how we send data to the function : function으로 data를 보내는 방법
3) how we receive data from the ouside world : function 밖에서 data를 받는 방법
 
# 가장 중요한 점
**** function안의 potato(placeholder, data를 받는 것)는 function "body{중괄호}" 안에서만 사용 가능
function body 밖에서 사용할 경우, potato is not defined at ~~ 라는 error 발생
*/


//////////////////////////////////////////////////////////////////////////////
// console.log와 같은 것 만들기 (= calculator.add();)
const calculator = {
  add: function(a,b){
    console.log(a + b);
  },
  minus: function(a,b){
    console.log(a - b);
  },
  divide: function(a,b){
    console.log(a / b);
  },
  times: function(a,b){
    console.log(a * b);
  },
  power: function(a,b){
    console.log(a ** b);
  }
};

calculator.add(40, 20);
calculator.minus(40, 20);
calculator.divide(40, 20);
calculator.times(40, 20);
calculator.power(40, 20);