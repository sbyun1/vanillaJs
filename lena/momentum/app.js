//const loginForm = document.getElementById("login-form");
                            // querySelector("#login-form")
//const loginInput = loginForm.querySelector("input");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"
//UpperCase Variable : only contains String

function onLoginSubmit(event){
    event.preventDefault(); //stops default behavior of any event
    loginForm.classList.add(HIDDEN_CLASSNAME); //when the value input, ass class "hidden"
    const userName = loginInput.value;
    
    //greeting.innerText = "Hello " + userName; 
    greeting.innerText = `Hello ${userName}`; 
        /*newer way to combine Strings::
             allows to put variables inside a String
             Need to use backtick (`)
        */
    greeting.classList.remove(HIDDEN_CLASSNAME);
    
}


//on submit - validation 
loginForm.addEventListener("submit", onLoginSubmit);

/*  when using EventListener, after JS calls the function,
    it will return information about the event that just happened
*/  

