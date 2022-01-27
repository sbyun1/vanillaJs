const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = []; //for save todos

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // array형태로 저장
}

function deleteToDo(event) {
  //click한 버튼이 있는 li를 삭제
  //console.dir(event.target.parentElement.innerText); // 무엇이 클릭된 건지 확인
  const li = event.target.parentElement; // target(클릭한 것)의 부모 element에 click event
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "✔️";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo); //array에 todo 저장
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  //localStorage에서 온 String으로 js jbg로 변함
  const parsedToDos = JSON.parse(saveToDos);
  parsedToDos.array.array.forEach(element => {

  });
}