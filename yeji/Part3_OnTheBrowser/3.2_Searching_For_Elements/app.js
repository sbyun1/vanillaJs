/* JS에서 HTML element를 가져오는 법 & 검색하는 법*/

// id와 class

// 지난 시간에 배운 것
// getElementById()
// getElementsByClassName()

// class 
const hellos = document.getElementsByClassName("hello");    // 배열이기 때문에 하나의 element만 가져올 수 없다
console.log(hellos);

// getElementsByTagName()
const title = document.getElementsByTagName("h1");
console.log(title);

/* element를 가져오는 방법 */
// querySelector | querySelectAll

// 1. querySelector : element를 CSS 방식으로 검색할 수 있다. (= hello란 class 내부에 있는 h1을 가지고 올 수 있다는 의미)
// 단 하나의 element를 return해준다
// CSS selector를 사용해 class hello를 찾고, 그 안에 있는 h1 태그를 가져오기
// ex) .className tag  == .hello h1
const title2 = document.querySelector(".hello h1");   // hello 앞에 . 을 사용한 이유 : 이건 CSS selector이기 때문에
console.log(title2);
// getElementByClassName() 함수 작성법 : getElementByClassName("hello");라고만 작성 -> JS에서 class name을 넘겨준다는 것을 알기때문에 이렇게 작성한 것
// 하지만 querySelector 안에는 hello가 class name이라는 것 & 그 안의 h1을 명시해줘야 함

// id로 element를 찾고 싶다면
// const title3 = document.querySelector("#hello");
//const title3 = document.getElementById("hello");
// 두 코드가 동일하게 작동됨
// querySelector에서는 우리가 뭘 검색하는지 명확하지 않으니까 id(#)라고 명시해주는 것 (∴ querySelector에서는 CSS selector자체를 전달하기 때문)
// hello 안에 있는 h1태그나 form 태그를 가져오고 싶다면 getElementById로는 할 수 없기 때문에 querySelector를 사용해 아래와 같이 작성해야 함
//const title3 = document.querySelector("#hello h1");
//const title3 = document.querySelector("#hello form");


// Q. HTML에 동일한 div가 3개있다고 가정했을 때, 위의 querySelector(".hello h1")의 console 실행 시 어떤 결과가 나올까?
// A. 첫 번째 것 하나만 출력 (<h1>Grab me!</h1>)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// querySelector를 사용할 때, class 안에 h1이 많을 수 있음 (하지만 Returns the first element)
// 만약 모든 element들을 가져오고 싶다면 ?
// 2. querySelectorAll()
// querySelectorAll은 class의 모든 element들이 들어있는 array를 가져옴
const title4 = document.querySelectorAll(".hello h1");
console.log(title4);

// 만약 querySelector로 조건에 맞는 모든 element를 찾고 싶다면 - querySelectorAll을 사용하면 됨
const title5 = document.querySelector(".hello h1:first-child");
console.log(title5);

// hello class안의 h1을 가져와보자
const title6 = document.querySelector(".hello h1");
title6.innerText="Hello";