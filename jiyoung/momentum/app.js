const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

//form을 submit 하면 브라우저는 기본적으로 페이지를 새로고침 하도록 되어 있음
//preventDefault(): 브라우저가 기본 동작 실행 못 하도록 막음
function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(username);

    //"",''이 아닌 ``(백틱)을 사용할 것, 변수는 ${} 안에 선언
    greeting.innerText = `Hello ${username}`;
    //greeting.innerText = "Hello " + username;

    greeting.classList.remove(HIDDEN_CLASSNAME);
}


loginForm.addEventListener("submit", onLoginSubmit);
