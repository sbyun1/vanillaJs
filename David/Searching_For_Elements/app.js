//getElementById 또는 Name 등을 이용해 도큐먼트 내 elements들을 가져올 수 있음

// const title = document.getElementById("something");

// title.innerText = "Got you!";

// console.log(title.className);

// const hellos = document.getElementsByClassName("hello");

// const title = document.getElementsByTagName("h1");


// elemnet를 가장 간지나게 가져오는 방법은 쿼리 셀렉터/쿼리 셀렉터 올
// 쿼리셀렉터는 element를 css 방식으로 검색할 수 있다
// 즉, 클래스는 . 아이디는 # 이런식으로 선택자를 붙일 수 있음

const title = document.querySelectorAll(".hello h1")
//선택자+선택자의 이름 태그이름
//쿼리셀렉터는 중복되는 선택자, 태그들이 아무리 많아도 단 한개(첫번째)만 가져올 수 있다.
//모두 가져오고 싶으면 쿼리셀렉터All을 쓰면 됨, array 형식으로 갖다줌
//document.getElementById("hello") == document.querySelector("#hello 태그명")

console.log(title);