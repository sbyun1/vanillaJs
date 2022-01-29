/* 이제까지 배운 것 복습 */
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// onLoginSubmit 호출 시 실행 > 내가 실행 X JS가 실행 O > JS가 함수를 호출하면서 argument 전달 > 그 argument에는 event에 관한 정보들이 담겨있음
function onLoginSubmit(event){
  // 기본 동작 막기
  event.preventDefault();

  // loginForm을 다시 숨김 상태로 전환
  loginForm.classList.add(HIDDEN_CLASSNAME);

  // input value를 username이라는 variable에 저장 
  const username = loginInput.value;            

  // variable의 value를 local storage에 username이라는 key로 저장 & input에 입력한 값을 value(username)로 저장
  localStorage.setItem(USERNAME_KEY,username); 

  // paintGreetings() 호출 (argument를 지워줌 = 이곳에서 아무것도 보내지 않아도 된다는 뜻)
  paintGreetings(username);   // ** onLoginSubmit()에서는 user 정보가 input으로부터 오고있다.

}

loginForm.addEventListener("submit", onLoginSubmit); 


// username이라는 argument를 받고 있는 paintGreetings 함수가 하는 일
function paintGreetings(username){        //(user정보가 local storage로부터 오고있다는 것을 알기때문에 argument를 작성하지 않아도 된다 + 대신 variable 생성)
  // + local storage에 있는 username을 찾도록 variable 작성  / 그러나 if문이 실행될 때 local storage를 한 번 열어보고, 이 함수가 실행될 때 한 번 더 열어보기 때문에 잘 생각해서 사용하자
  // const username = localStorage.getItem(USERNAME_KEY);

  // 1) 비어있는 h1 요소 안에 `Hello ${username}` 이라는 text를 추가해주는 것
  greeting.innerText = `Hello ${username}`;

  // 2) h1 요소로부터 "hidden"이라는 class명 제거
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

/* 1. JS가 local storage를 제일 먼저 찾을 것
    - local storage : 정보를 저장하고 불러오고 삭제하는 브라우저가 가진 작은 DB 같은 API
    - 만약, local storage에 없는 정보를 불러오려하면 null값을 받음 / 하지만 local storage에 존재하는 정보를 불러오려한다면 그 key에 해당하는 value를 받게될 것
      * 존재하는 정보에 대한 "key"를 검색하면 그 "value"를 String으로 받게되는 것
*/
const savedUsername = localStorage.getItem(USERNAME_KEY);


/* 
  처음 온 user라면 if의 조건이 true (savedUsername === null)
    1) loginForm으로부터 HIDDEN_CLASSNAME을 제거 (HTML > form 태그 > remove class="hidden" > show the form)
    2) loginForm에 addEventListener를 더하고, submit을 기다리는 것 => submit event가 발생하면 onLoginSubmit 함수 실행
        # onLoginSubmit function 
      
        - step 1) event가 원래 하는 행동을 멈추기 (브라우저의 기본동작 막기 = 페이지 새로고침)
          event.preventDefault();
        - step 2) form을 다시 숨기기 (hide form again)
          loginForm.classList.add(HIDDEN_CLASSNAME);
        
        - step 3) loginInput.value를 username이라는 variable로 저장
          const username = loginInput.value;
        
        - step 4) username 값을 username이라는 key와 함께 local Storage에 저장 (개발자 모드 => Application에 저장되어있음)
          localStorage.setItem(USERNAME_KEY,username); 
  
        - step 5) paintGreetings function 호출 (paintGreetings function은 하나의 argument(username = user가 form 안의 input에 작성한 것)를 받고 있음)
          paintGreetings(username);
*/
if(savedUsername === null){
  // 처음 온 user 라면 이 코드가 실행 >  classList에서 hidden이라는 class를 지워줌 > form이 표시됨
  loginForm.classList.remove(HIDDEN_CLASSNAME);

  // > addEventListener가 form이 submit되기를 기다림 > submit 발생 시 onLoginSubmit 함수 호출
  loginForm.addEventListener("submit", onLoginSubmit);

}else{
  // paintGreetings 함수에서 받는 argument만 savedUsername으로 다르다. + 화면에 text가 출력되게 하는 것
  paintGreetings(savedUsername);  // ** user정보가 local storage로부터 오고 있다.
}