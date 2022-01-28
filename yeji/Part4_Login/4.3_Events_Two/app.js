  const loginForm = document.querySelector("#login-form");
  const loginInput = document.querySelector("#login-form input");

  const link = document.querySelector("a");

  function onLoginSubmit(event){           
    event.preventDefault();
    console.log(event);
  }

  function handleLinkClick(event){
    event.preventDefault();
    // console.log(event);
    console.dir(event);
    // alert("clicked !");
  }
  
  loginForm.addEventListener("submit", onLoginSubmit); 
  link.addEventListener("click", handleLinkClick);

// 방금 일어난 event에 대한 정보를 담은 object : handleLinkClick을 위한 EventListener 함수의 첫 번째 argument로 주어지게 될 것
// 공간을 만들어서 정보를 받기만 하면 된다.
  // handleLinkClick({information about the event that just happened})


/* 가장 중요한 것 */
// 우리는 addEventListener 안에 있는 함수를 직접 실행하지 않는다는 것
// 브라우저가 해주는 것 -> 브라우저는 실행시켜주는 것 뿐만 아니라 event에 대한 정보도 담아준다
// 자리(공간)만 만들어주면 되고, 정보 안에는 몇 가지 함수도 같이 들어있음 (ex. preventDefault() : event는 멈추게 되고 아무것도 진행되지 X)