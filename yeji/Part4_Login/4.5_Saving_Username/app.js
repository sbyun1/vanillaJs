// username 저장하기
// loginInput의 값을 variable에 저장하고, 비어있는 h1인 greeting을 가져다 "hello username"라는 텍스트 넣어주기

/* value 값 저장하기 (remember)
  - 브라우저에는 뭔가를 기억할 수 있게 해주는 기능 존재(API : Local Storage)
  - Local Storage : 브라우저에 뭔가를 저장할 수 있게 해주고, 나중에 가져다 사용할 수 있다
    * html => F12 => Application => Local Storage => file
  
  - Local Storage API에는 다양한 method가 존재
  * setItem() method : Local Storage에 정보를 저장할 수 있음
    ex. F12 > console창 > localStorage.setItem("username", "yeji") 라고 작성하면, undefined라고 출력되지만, DB에 새로운 항목이 생김
  
  * setItem()과 반대로 getItem()으로 저장한 값을 불러올 수 있음
    ex. F12 > console창 > localStorage.getItem("username")

  * 원한다면 저장한 값을 지울 수 있음
    ex. F12 > console창 > localStorage.removeItem("username") > Application 가서 삭제된 것 확인
  */

  const loginForm = document.querySelector("#login-form");
  const loginInput = document.querySelector("#login-form input");
  const greeting = document.querySelector("#greeting");
  const HIDDEN_CLASSNAME = "hidden";

  function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;            // username : 저장될 item의 이름
    localStorage.setItem("username",username);    // 값은 "username" 변수 

    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    
    console.log(username);
  }
  
  loginForm.addEventListener("submit", onLoginSubmit); 