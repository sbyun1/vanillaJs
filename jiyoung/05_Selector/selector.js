/* getElementsByClassName */
//array로 반환
const getClassName = document.getElementsByClassName("hello");
console.log(getClassName);

/* getElementsById */
const getId = document.getElementById("hello");
console.log(getId);

/* querySelector */
//니꼬쌤이 가장 좋아함
//css selector 방식으로 검색
//조건에 맞아도 오직 첫번째 element만 가져옴
const title = document.querySelector(".hello h1");
console.log(title);

/* querySelectorAll */
//조건에 맞는 모든 element 가져올 때 사용
//array로 반환
const titleAll = document.querySelectorAll(".hello h1");
console.log(titleAll);
