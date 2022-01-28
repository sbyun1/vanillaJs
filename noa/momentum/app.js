const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");

function onLoginSubmit(event) {
  const username = loginInput.value;
  /*
  form이 아닌 div에 넣을 경우
  if (username === "") {
    alert("Please write your name.");
  } else if (username.length > 15) {
    alert("Your name is too long.");
  } 
  */

  //stop refresh when submit event happened
  //preventDefault() : stops the default behavior of any event
  event.preventDefault();
  console.log(username);

}

/*
function handleLinkClick(event) {
  event.preventDefault();
  alert("clicked!");
}
*/

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);