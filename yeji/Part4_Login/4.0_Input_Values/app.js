// 1. user에게 질문하기
// 2. 그 data들을 어떻게 받을지 
// 3. 2번에서 받은 data를 화면에 표시하기

// querySelector || getElementById 사용
  // querySelector 사용 시, 대상이 id인지 명확하게 작성해야 함
  // const loginForm = document.querySelector("#login-form");

  // 1. HTML에서 form을 찾는다.
    // const loginForm = document.getElementById("login-form");
  // 2. JS가 form을 찾았다면, loginForm은 HTML 내에 있는 element라는 뜻 / <div id="login-form"> 이라는 element를 JS로 끌어옴

// input과 button 끌어오기
  // 3. input과 button을 document가 아닌 loginForm 안에서 바로 찾을 수 있다.
  // const loginInput을 작성한 다음, document에서 찾는 대신, 위에 작성한 loginForm에서 검색하기
    // const loginInput = loginForm.querySelector("input");
    // const loginButton = loginForm.querySelector("button");

/* 세 줄의 코드를 더 짧게 작성하는 것도 가능 
  // const loginForm = document.getElementById("login-form");
  // const loginInput = loginForm.querySelector("input");
  // const loginButton = loginForm.querySelector("button");
*/
  const loginInput = document.querySelector("#login-form input");
  const loginButton = document.querySelector("#login-form button");

// 4. Log In 버튼 click 시, console.log()에 출력하기
  function onLoginBtnClick(){
    // index에서 name 입력 시, 입력하는 value를 얻어서 console에 출력하기
    // ⓑ console.dir(loginInput);    // console에서 나오는 input 클릭 -> 그 중 value에 값을 알고 싶은 것 (HTML파일 안에서 value값을 미리 넣어줄 수 있음)
    // ⓒ
    console.log(loginInput.value);
    // ⓐ console.log("click!!!");
  }

  loginButton.addEventListener("click", onLoginBtnClick);
