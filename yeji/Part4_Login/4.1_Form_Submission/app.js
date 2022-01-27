// username의 유효성 검사
  // username이 입력되지 않았거나 너무 길다면, Log In 버튼을 누를 수 없도록
  const loginInput = document.querySelector("#login-form input");
  const loginButton = document.querySelector("#login-form button");

  function onLoginBtnClick(){
    const username = loginInput.value;

    // if(username === ""){
    //   alert("Please write your name");
    // }else if(username.length > 15){ // 15글자를 초과한다면 경고창 띄우기
    //   alert("Your name is too long");
    // }
  // 위와 같이 코드를 작성하는 것보다 HTML에서 기본적으로 제공하는 기능을 이용하자 => HTML로 넘어가서 수정하기
  // HTML의 도움을 활용하기 위해서는 form 안에 input이 위치해야 한다.

  // 수정(required, maxlength 추가) 후, username을 입력하고 Log In 버튼을 누르면 값이 가지 않고 새로고침된다
  // => 웹사이트를 재시작 시키고 있는 것 (∴ form이 submit되고 있기 때문에)
  // form 안에서 enter를 누르고 input이 더 존재하지 않는다면 자동으로 submit 된다는 규칙 有
  // 또는 form 안에 있는 버튼을 눌렀을 때에도 form이 자동으로 submit된다
  // 그러니 더이상 버튼을 클릭하는 것에 신경쓰지 말고, form을 submit하는 것에 집중해보자

    console.log(username);
  }

  loginButton.addEventListener("click", onLoginBtnClick);
