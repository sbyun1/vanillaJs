// Input Values ~ Form Submission



// const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");
// const link = document.querySelector("a");


// function onLoginSubmit(tomato){
//     tomato.preventDefault(); // 브라우저가 기본적으로 수행하는 동작, 예를들어 submit하면 새로고침되는데
//     //그러한 기본 동작을 막는 function이다. preventDefault
//     //링크 클릭의 기본동작은 페이지 이동
//     console.log(loginInput.value);
// }

// function handleLinkClick(event){
//     event.preventDefault();
//     console.log(event);
//     alert("click!"); // alert의 기본동작은 모든 기본동작들을 확인을 누르기전까지 다 멈춤..
//     //잘 안쓴다고 함..
// }

// loginForm.addEventListener("submit",onLoginSubmit);
// link.addEventListener("click",handleLinkClick);

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(evnet){
    evnet.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(username);
    //greeting.innerText = "Hello " + username;
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit)

const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);

if(savedUsername===null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else {
    //show the greetings
    paintGreetings(savedUsername);
}