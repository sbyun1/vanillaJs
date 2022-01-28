const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//대문자로 쓰는건 관습(일반적으로 string만 포함된 변수에서 사용)
const HIDDEN_CLASSNAME = "hidden"; 
const USERNAME_KEY = "username";

const link = document.querySelector("a");

function onLoginSubmit(event) {
   event.preventDefault(); //첫번째 argument안에 있는 function정보
   loginForm.classList.add(HIDDEN_CLASSNAME);
   const username = loginInput.value;

   //localStorage에 저장
   localStorage.setItem("USERNAME_KEY", username);
   paintGreetings(username);
}

loginForm.addEventListener("submit", onLoginSubmit); //submitEvent

function paintGreetings(username) {
   greeting.innerHTML = `Hello ${username}`;
   greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem("USERNAME_KEY");

if(savedUserName === null) { 
   //show the username
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   loginForm.addEventListener("submit", onLoginSubmit)
}else {
   //show the greetings
   paintGreetings(savedUserName)

}

