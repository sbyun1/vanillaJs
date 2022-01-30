const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];
// array가 비어있게 되면 항상 다시 덮어써진다.

function saveToDos(){
    // localStorage에 넣는 함수
    // JSON.stringify > javascript를 강제 String 형식으로 바꾸는 함수
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
    // event에 대한 button을 감지 어디를 클릭하는지 확인하고 클릭이벤트 발생
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText ="❌";
    button.addEventListener("click", deleteTodo)
    
    // li 의 자식으로 span추가 > appendChild 사용 append는 항상 마지막에
    li.appendChild(span);
    li.appendChild(button);
    toDoList.append(li);
}


function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    // toDos < Array 에 newTodo를 push
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    // 입력한 newTodo를 이용해 paintToDo 함수 호출
    paintToDo(newTodoObj);
    // localstorage 저장 함수 호출
    saveToDos();
    
}

toDoForm.addEventListener("submit", handleToDoSubmit);
// localstroage에 있는 String으로 변환된 값을 JSON.parse를 통해
// 변환 해서 가져오는 함수추가
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    // javascript는 array에 있는 각각의 item에 대해
    // function을 실행을 할 수 있게 한다 > forEach 사용
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    // => > arrow function 으로 function을 따로 만들지 않고 실행할 수 있다.
}

// filter
// 함수를 항상 true로 반환해야 새로운 array에 적용이 된다.
// false가 리턴되면 그건 제외하고 새로운 array에 적용이되서 출력된다