const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

/* target */
//클릭된 html element를 의미

/* parentElement */
//클릭된 elements의 부모
function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

/* appendChild */
//자식 요소로 가져와라
//append(): 객체, 문자열 등 모두 추가 가능
//appendChild(): 객체만 추가 가능
function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);