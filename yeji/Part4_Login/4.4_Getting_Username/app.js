// user가 이름을 작성하고 제출하면, form을 안보이게끔 만들기 
// 1. HTMl 요소 자체를 없애기
// 2. CSS를 이용해 숨기기

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// HTML h1 태그의 id 변수 생성
const greeting = document.querySelector("#greeting");
// String 값 hidden을 두번 썼으니 변수로 만들자
// 대문자로 작성한 이유 : 일반적으로 string만 포함된 변수는 대문자로 표기하고, String을 저장하고 싶을 때 사용한다.
//                      & loginForm이나 loginInput처럼 중요한 정보를 담은게 아니라서 대문자로 작성 可
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event){
  // user가 이름을 form을 통해 제출했을 때, 기본 동작은 막아주고,
  event.preventDefault();

  // form 태그에 작성한 class="hidden"은 삭제하고, 여기서 classList에 hidden을 추가해주자 (HTML의 form 숨기기)
  loginForm.classList.add(HIDDEN_CLASSNAME);

  // user이름 저장해주고,  
  const username = loginInput.value;       

  // 저장된 user 이름을 h1 태그 안에 저장 (아래 두 줄의 코드는 동일한 결과를 출력)
  //greeting.innerText = "Hello " + username;
  greeting.innerText = `Hello ${username}`;
  // 변수와 String을 결합하고 싶거나 변수를 String 안에 넣고 싶다면, 
  // ${} 사용 + `` (백틱 기호, not single or double quotation)

  // hidden 클래스를 숨기고, h1 태그를 보여줌
  greeting.classList.remove(HIDDEN_CLASSNAME);

  console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit); 