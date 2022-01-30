const loginForm = document.querySelector("#login-form");
  const loginInput = document.querySelector("#login-form input");
  const greeting = document.querySelector("#greeting");

  const HIDDEN_CLASSNAME = "hidden";
  const USERNAME_KEY = "username";

  function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;            
    localStorage.setItem(USERNAME_KEY,username); 

  // greeting에 텍스트 Hello ${username}을 추가 후, hidden class명을 지워주기
  // 하지만 함수를 호출하는 위치에 따라 유저정보는 다른 곳에서 오게 될 것
  /* ex. local storage에 유저정보가 있으면 거기서 유저 정보를 받아서 인자(argument)로 넣어줄 것
        만약, local storage에 유저정보가 없다면, form의 submit을 기다리고, form이 submit되면 input으로부터 user정보를 받고
        input에서 받은 user를 가진 paintGreetings를 호출할 것
  */ 
    // greeting.innerText = `Hello ${username}`;
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(username);
    
    console.log(username);
  }
  
  loginForm.addEventListener("submit", onLoginSubmit); 

  // 15~16행과 41~42행greeting.classList.remove(HIDDEN_CLASSNAME); 를 동일하게 두번 반복하고 있기 때문에 함수로 만들어서 사용하기
  function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
  }

  // 1. 만약 user정보가 localStorage에 없다면 localStorage는 null값을 반환할 것
  const savedUsername = localStorage.getItem(USERNAME_KEY);

  if(savedUsername === null){
    // show the form
  // 2. 그래서 savedUsername 값이 null이라면, form의 hidden class명을 remove
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
  }else{
    // show the greetings
  // 3. greeting을 보여주기 위해서 hidden class명을 제거해야 함
    // greeting.innerText = `Hello ${savedUsername}`;
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
  }