//const loginForm = document.getElementById("login-form");
                            // querySelector("#login-form")
//const loginInput = loginForm.querySelector("input");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event){
    event.preventDefault(); //stops default behavior of any event
    console.log(loginInput.value);
    //const userName = loginInput.value;
    //console.log(userName);
}

//on submit - validation 
loginForm.addEventListener("submit", onLoginSubmit) 
//when using EventListener, after JS calls the function,
//it will return information about the event that just happened
