const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HEDDEN_CLASSNAME = "hidden"; //string만 포함된 변수는 대문자로 표기 - String 저장하고 싶을 때 사용
const USERNAME_KEY = "username";

/*
function onLoginSubmit(event) {
  const username = loginInput.value;
  form이 아닌 div에 넣을 경우
  if (username === "") { alert("Please write your name."); }
  else if (username.length > 15) { alert("Your name is too long."); } 
}
*/

function onLoginSubmit(event) {
  //stop refresh when submit event happened
  //preventDefault() : stops the default behavior of any event
  event.preventDefault();
  loginForm.classList.add(HEDDEN_CLASSNAME);
  const username = loginInput.value;

  //let the browser remembers value
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HEDDEN_CLASSNAME);
}

//check username
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  //show the form
  loginForm.classList.remove(HEDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show the greetings
  paintGreetings(savedUsername);
}