// 삭제 버튼을 누르면 화면에서는 삭제가 되지만 localStorage에서 삭제되지 않는 문제 해결하기

/* localStorage를 Database라고 생각해보자
    나한테서는 Database가 아니지만, console에 "toDos"를 작성해보면 이건 Database이다.
    ∴ local Storage는 toDos array를 복사해두는 곳이기 때문에
    toDos array != localStorage

    화면에서는 지워졌지만 여전히 toDos array안에는 값이 존재
    하지만 어떤 item을 지워야 할 지 알 수 없음    

    만약 toDo에 "a"가 두 개 라면?
    첫 번째 "a"를 지웠을 경우, 첫 번째인지 마지막인지 어떤 "a"를 지운지 알 수 있나?

    => 그렇기 때문에 toDos를 더 좋은 방법으로 만들기
       - toDo들에게 ID 같은 걸 주기 (text 대신 object로 만들고 싶은 것)
          ex. toDo의 내용 : [{id:121212, text:"drink"}]

       - 랜덤한 id 부여

---------------------------------------------------------------------------------------------
  1) toDos 데이터베이스(local Storage) 비우기
      - 개발자 도구 > Application > item 모두 삭제
  
  2) 랜덤한 id 만들기
      - 완전한 random 숫자 X
      - element가 만들어질 때 id를 갖게 될 것
        => 개발자 도구 > console > Date.now() 작성
        Date.now() : 밀리초(1000분의 1초)를 주는 함수

  3) 데이터베이스에 ToDo 내용을 추가하는 곳으로 가보자

*/ 
const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo){
  const li = document.createElement("li");

  // HTML element에서 li에 id값이 추가되면서 생성
  li.id = newTodo.id;

  const span = document.createElement("span");
  
  // span.innerText = newTodo;
  // object에서 text와 id를 보내기때문에 newTodo.text로 수정해줘야 함
  span.innerText = newTodo.text;

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
  
  // 3) 데이터베이스에 ToDo 내용을 추가하는 곳 : 여기서 데이터베이스로 매번 사용자가 적어둔 text를 push함
  // toDos.push(newTodo);
  
  // 71행의 코드와 다르게 text가 아닌 object를 push
  // 방법 1. 여기에 직접 object 생성
  // toDos.push({newTodo});
  
  // 방법 2. 새 object 생성
  const newTodoObj = {
    text:newTodo,
    id:Date.now()
  }
  // 새로 생성한 object(newTodoObj)를 toDos array에 담기
  // ㄱ. toDos array에 newTodoObj를 추가
  toDos.push(newTodoObj);
/////////////////////////////////////////////////////////////////////////////////////////////////////
  // id를 사용하는 방법
  /* id를 HTML에 두고 싶다면?
      paintToDo가 있는데, paintToDo는 오직 text인 newTodo만 갖고 있다. -> 이걸 object로 바꾸기
      paintToDo에 String으로 newTodo를 주는 대신 newTodoObj를 줄 것

      ㄴ. paintToDo에는 text를 주는 것이 아니라 newTodoObj를 줄 것
      => 여기서 문제 : toDoInput에 글자를 적으면 object Object 로 나옴 => 실제 글자로 나오게 하려면, paintToDo를 수정하자
      span.innerText = newTodo; => span.innerText = newTodo.text;
  */
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item){
  console.log("this is the turn of", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  console.log(parsedToDos);   // => array

  parsedToDos.forEach(paintToDo);
}

/* id가 있는 이유는 ?
    : id로 각각의 item을 구별하고 싶었음
  이전의 paintToDo는 toDoInput.value에서 온 newTodo와 함께 call했지만, 이제는 object와 함께 call되고 있기 때문에 수정했어야 했다.
    span.innerText = newTodo; => span.innerText = newTodo.text;

  · paintTodo에서 li.id = newTodo.id; 코드 추가
    (HTML ul 태그 안에 id가 보이는 li 태그 생성)

  하지만 여전히 삭제는 되지 않고 있다. ∴ Application에서 id를 갖고 있다

  savedToDos에서 todo를 받고, todo를 local storage에서 받으면 이걸 forEach한다. (114행 if문)
  forEach가 실행되면 paintToDo()function을 호출
  -> parsedToDos.forEach(paintToDo);  ex. 이런 식으로 생겼을 것

  아직 아무것도 삭제하지 않았지만, 데이터베이스(localStorage)에 id를 저장하는 option을 줬음
  + ToDoList Object에 id가 저장된다는 뜻 = 삭제할 수 있다는 뜻

  toDo 옆에 삭제 버튼("X")의 id를 얻어야 함
  deleteToDo()에서 const li = event.target.parentElement 
  => 화면에서 li를 삭제하기 전에 li를 얻게 된다 + 화면에서 삭제하기 전에 li의 id도 얻는다
  => toDoInput에서 a를 적고 삭제하면 li의 id를 얻는다
*/
