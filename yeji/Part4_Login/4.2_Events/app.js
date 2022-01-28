// button 없이 form에서 submit하기 (click이 아닌 submit 감지하기)

// 아무것도 하지 않아도 JS가 어떤 정보를 담은 채로 function을 호출한다는 것을 배우자

// form을 submit할 때, 입력값을 받아내기 (+ 버튼을 누르면 새로고침 되는 것은 form의 submit 기본 동작)
  const loginForm = document.querySelector("#login-form");
  const loginInput = document.querySelector("#login-form input");

  /* 
    event가 발생할 때, 브라우저가 function을 호출 
    => ()가 비어있는 채로 호출하는 것이 아니라 첫 번째 argument로써 추가적인 정보를 가진 채로 호출
       onLoginSubmit(information) => ex. onLoginSubmit(xxxxx)
      
    이 function이 하나의 argument(tomato)를 받도록 하기
  */
  function onLoginSubmit(event){           // 1. function이 하나의 argument를 받도록 하고 그것을 JS로 넘겨준다
    // preventDefault()의 역할 : 어떤 event의 기본 행동이든지 발생되지 않도록 막는 것
    // 기본 행동이란 ?  : 어떤 function에 대해 브라우저가 기본적으로 수행하는 동작
    // 누군가 form을 submit하면 브라우저는 기본적으로 페이지를 새로고침하도록 되어있는데, 이것이 기본 행동이라고 보면 됨
    event.preventDefault();    
    
    // EventListener 함수의 첫 번째 argument 안에 있는 function
    // EventListener 함수에 어떠한 function을 넣던지 JS에서는 첫번재 argument로 발생된 event에 대한 정보를 줄 것
    // function onLoginSubmit()으로만 작성해도 되지만 ()안에 공간을 만들어주면 JS에서 그 공간에 event를 채워준다
    console.log(event);
  }

  // onLoginSubmit이 아닌 onLoginSubmit()라고 작성 시, function이 바로 자동 실행된다.
  loginForm.addEventListener("submit", onLoginSubmit); // 2. 누군가 form을 submit하면 JS가 function을 호출하도록 하고 있다.

  /* onLoginSubmit() */
  // 여기서 JS가 하게 될 일은 onLoginSubmit 함수의 첫 번째 argument로 발생할 일에 대해 내가 필요로 할 만한 정보를 주는 것
  // 모든 EventListener function의 첫 번째 argument는 항상 지금 막 벌어진 일들에 대한 정보가 될 것 -> 우리는 공간만 제공
  // 그 공간에 방금 일어난 event에 대한 정보를 지닌 argument를 채워넣을 것 => 그 결과는 console에서 확인 可 (방금 실행된 event에 대한 정보)