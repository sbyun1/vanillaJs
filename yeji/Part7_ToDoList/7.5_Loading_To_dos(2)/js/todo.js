// 이전에 작성했던 toDo를 복원하기 (새로운 값 덮어씌우기 X)

/*
  이제까지 배운 것
    - JS의 object나 array 등을 String으로 변환O
    - 변환된 String을 가지고 String이 아닌 JS에서 사용가능한 object로 만들 수 있다는 것 => 이 경우 array로 변환
    - array의 각 item에 대해 하나의 function을 실행할 수 O  (parsedToDos.forEach + function 작성)
    * 둘 중 선택할 수 있다.
    1) arrow function 사용 (2번보다 더 짧게 작성할 수 O)
    2) sayHello function 생성  -> JS는 item을 그냥 넘겨주니까 console.log("this is the turn of", item);이라고 작성하면 됨

    ☆★가장 중요한 것★☆
    - JS는 이 function(sayHello())을 호출하면서 array에 있는 각각의 item을 준다는 것
    (sayHello를 6번 실행하는 것이 아니고 맨 처음 sayHello("a") 실행 > sayHello("b") 실행 > sayHello("c") 실행 > ..)

*/
const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

/* application이 시작될 때 toDos array는 항상 비어있기 때문에 새롭게 추가하는 항목들은 추가되지만, 이전에 있던 것은 사라짐 (덮어씌워짐)
   내가 작성한대로 잘 작동하고 있는 것 (새로운 toDo들은 사용자가 입력하는 것 + newTodo들만 toDos array에 추가해서 localStorage에 저장하고 있음)
   갖고 있던 toDos의 이전 복사본을 잊어버리고 있다는 뜻
   
   1) application이 시작될 때 toDos array를 빈 값으로 시작하는 대신에 const 대신 let을 사용해 update가 가능하도록 수정
   2) localStorage에 toDo들이 있으면 toDos에 parsedToDos를 넣어, 전에 있던 toDo들을 복원하기
*/
 // const toDos = [];
 let toDos = [];

// 새로운 toDo들만 포함하고 있는 array 저장하기

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
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
    
    // submit을 할 때 마다 newTodo를 빈 array였던 toDos array에 push했기 때문에 이전 toDo가 나오지 않고 새로 덮어씌워졌던 것
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item){
  console.log("this is the turn of", item);
}

// savedTodos 가져오기
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);

  // toDos array를 시작할 때, const savedToDos = localStorage.getItem(TODOS_KEY);에서 볼 수 있듯이 localStorage에서 발견되는 이전의 toDo들로 하고 싶은 것
  toDos = parsedToDos;

  // item을 받아서 item을 사용하도록 선언
  // parsedToDos.forEach((item) => console.log("this is the turn of", item));
  // 이제 원하는 건, parsedToDos array 내부의 item을 가지고 그 item을 나타내고 싶은 것 (다행히 이미 item을 화면에 그려주는 parintToDo function 有)
  // 화면에 ToDoList 보여주기
  parsedToDos.forEach(paintToDo);
  // ∴ paintToDo는 text를 받는데 JS는 그 text를 paintToDo에 전달해줌 (=> JS는 paintToDo에 "a",..."d"(array에 있는 각각의 item)를 넣어주기 때문)
}

// 문제점 : 삭제 버튼을 눌러서 삭제하면 화면에서는 삭제가 되지만, localStorage에서는 지워지지 않음