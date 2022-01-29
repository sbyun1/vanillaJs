// 실제로 toDo들을 저장해보기
// => local storage 사용

/*
  1) 먼저 toDoInput에 작성한 내용을 localStorage에 저장
    => array 생성
    => newTodo가 생성될 때마다 그 text를 array에 push 하기 (newTodo를 그리기 전에 toDos array를 갖고와서 newTodo를 push하기)
  2) localStorage에 저장된 것들을 불러와서 화면에 뿌려주기
*/

const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

// array 생성
const toDos = [];

// 새로운 function 생성
// saveToDos() 역할 : toDos array의 내용을 localStorage에 넣는 것
function saveToDos(){
// localStorage.setItem("todos", toDos);   // saveToDos function이 호출되는 시점에는 newTodo에는 array에 들어있음
  // input에 작성한 값이 Application에 저장되는 것을 확인할 수 있음
  // 그러나, localStorage에는 저장되어있지만 새로고침하면 빈 화면이 나타나고, 동일한 글자를 작성하면 새로고침되면서 이전에 작성한 것들이 사라짐
  // 1. 먼저 toDo들을 그리기
  // 2. 그 후, 복제와 다른 모든 것들에 대해 알아보자
  // + toDo들을 text로 저장하지 않고, array로 저장하자 (∴단순한 text가 아니기 때문에)
  // Application에서 직접 수정할 수 있지만 이건 단순히 text이다. => console창 > localStorage.getItem("todos") > 출력

  // ex. player name이 yeji가 있다고 가정하고 이것을 String으로 바꾸고 싶다면 => const player = {name : "yeji"} => String으로 출력
  // player를 JSON.stringify() 안에 넣기만 하면 된다.
  // JSON.stringify() : JS object나 array 또는 어떤 JS 코드이건 간에 String으로 변환해줌
  // localStorage.setItem("todos", toDos); 코드와 비교해보기
  localStorage.setItem("todos", JSON.stringify(toDos)); // => array모양으로 Application에 저장되는 것을 볼 수 있음
}

function deleteToDo(event){
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    
    // paintToDo로 newTodo를 보내기 전에 toDos 배열에 push해주기
    // 1. newTodo를 toDos array에 push한 후
    toDos.push(newTodo);
    // 2. 화면에 그 todo를 그려주기 => 그렇다면 이제 function을 하나 더 만들기
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// toDos 배열에 저장된 값을 localStorage에 넣는 것 => 하지만 localStorage에는 array를 저장할 수 X (오직 text만 저장할 수 있음)

/* 순서
     - 사용자가 form을 submit하면, input을 비우기
     - 작성한 text(newTodo)를 toDos array에 push하기
     - 화면에 toDo를 그려주기
     - saveToDos로 todo들을 저장하기
 */