const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");
let toDos = [];
const TODOS_KEY = "todos"


function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
} // 해당 타입이 배열이든 넘버든 뭐든간에 String 타입으로
//변환시켜주는 JSON.stringify

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveTodos(); // 삭제된것을 localStorage에도 저장할수있게 commit하는 기능

}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.addEventListener("click", deleteTodo)

    li.appendChild(span);
    li.appendChild(deleteBtn);
    toDoList.appendChild(li);

    
}


function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveTodos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY)

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
// parsedToDos.forEach((item) => console.log("hello"));
// 위 forEach문이랑 동일하다, function 추가 없이 shortcut으로 가능
// => 가 function이라고 보면됨, 애로우 펑션이라고 함.
// function sayHello(item){
//     console.log("hello", item)
// }
