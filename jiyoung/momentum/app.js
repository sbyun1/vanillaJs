const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

//form을 submit 하면 브라우저는 기본적으로 페이지를 새로고침 하도록 되어 있음
//preventDefault(): 브라우저가 기본 동작 실행 못 하도록 막음
function onLoginSubmit(event){
    const username = loginInput.value;
    event.preventDefault();
    console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit);