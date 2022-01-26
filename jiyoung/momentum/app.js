const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick(){
    const txt = loginInput.value;
    console.log(txt);
}

loginButton.addEventListener("click", onLoginBtnClick);