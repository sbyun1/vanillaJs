//const loginForm = document.getElementById("login-form");
//const loginInput = loginForm.querySelector("input");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "userName";
//UpperCase Variable : only contains String

function onLoginSubmit(event){
    //1. stops default behavior of any event
    event.preventDefault(); 

    //2. when value input, add class "hidden" to form
    loginForm.classList.add(HIDDEN_CLASSNAME); 
    const userName = loginInput.value;

    //3: store input value using localStorage
    localStorage.setItem(USERNAME_KEY, userName);
    
    //4. shows h1 with userName and hide form
        //greeting.innerText = `Hello ${userName}`; 
        //greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(userName);
}

function paintGreetings(userName){
    greeting.innerText = `Hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    //show the greetings
   paintGreetings(savedUserName);
}

/*
OVERALL FLOW:
    1. JS checks localStorage (if~else)
    2. if localStorage has userName : show greetings using function paintGreetings(userName);
    3. if localStorage is null, show loginForm and wait for the onLoginSubmit event
    4. function onLoginSubmit(e) will be executed

NOTES: 
    1. newer way to combine Strings:: `Hello ${userName}`;
        allows to put variables inside a String
        Need to use backtick (`)   

    2.  when using EventListener, after JS execute a function,
        it will return information about the event that just happened.
        Use argument name 'event' :: function onLoginSubmit(event)
*/ 
 