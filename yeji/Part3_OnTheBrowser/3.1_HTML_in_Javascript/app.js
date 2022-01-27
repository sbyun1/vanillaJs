// console 창에서 HTML 파일에서 id="title"로 설정한 값 출력하기
const title = document.getElementById("title");

// console.log(); => 똑같은 결과 출력
// console.dir(); => element를 더 자세하게 보여줌
//console.dir(title);

// innerText를 활용해 update하기 (Grab me ! => Got you !)
title.innerText = "Got you !";

console.log(title.id);          // title의 id 출력
console.log(title.className);   // title의 className 출력

/* HTML <h1> + autofocus 추가 
  - console에서 autofocus : true 확인
*/

// JS는 HTML element를 갖고 오지만, HTML 자체를 보여주진 않는다.(=JS는 HTML을 표현하는 object를 보여주지 않는다) 

/* HTML <h1> + class 추가
  - console
*/

// 1) document에서 항목들을 가져오는 것
// 2) 이 document의 항목들을 변경(update)하는 것