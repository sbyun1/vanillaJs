/* 이제까지 배운 것을 활용하면 쉽게 삭제를 할 수 있다
  ∴ 항목을 지울 때마다 다른 id를 얻는다는 것을 알고 있기 때문에

  ☆★filter function이 새 array를 주는 것을 꼭 기억 ★☆
  ex) const arr = [1, 2, 3, 4]                    => undefined 출력
      arr.filter(item => item > 2)                => [3, 4] 출력
      const newArr = arr.filter(item => item > 2) => undefined 출력
      arr                                         => [1, 2, 3, 4] 출력
      newArr                                      => [3, 4] 출력
      -> arr은 newArr을 실행하기 전과 동일하다
      -> newArr은 arr.filter가 전달해준 값이다.
      -> filter는 arr 배열을 변경하지 않는다.


  # id가 있는 todo를 지우기 

  */
const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){   
  const li = event.target.parentElement;
  li.remove();
  
  // local Storage를 update하는 것과 같이 삭제할 때도 update해줘야 함
  // 클릭했던 li의 id를 갖고 있는 toDo를 지우기 ( toDo의 id가 li의 id와 다른 것을 남기기)
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
                      // ┗ 이 toDo는 toDos DB에 있는 요소 중 하나를 의미
                      // 그래서 filter() 괄호 내의 함수는 DBdp 있는 모든 것과 함께 실행됨
                      // toDo.id !== li.id : 클릭한 li.id와 다른 toDo는 남겨두고 싶다는 의미
  
  // toDos DB에서 todo를 지운 뒤, saveToDos를 한 번 더 불러야 한다는 것 잊지 말기
  saveToDos();
  // saveToDos()를 불렀기 때문에 삭제 버튼을 누르고 저장시켜줘서 console에 toDos를 입력하면 삭제된 것은 보이지 않음
}

function paintToDo(newTodo){
  const li = document.createElement("li");
  li.id = newTodo.id;

  const span = document.createElement("span");
  span.innerText = newTodo.text;

  const button = document.createElement("button");
  button.innerText = "🤍";
  button.addEventListener("click", deleteToDo);
  
  li.appendChild(span);
  li.appendChild(button);
  
  toDoList.appendChild(li);
}

function handleToDoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  
  const newTodoObj = {
    text:newTodo,
    id:Date.now()
  }
  toDos.push(newTodoObj);
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
  toDos = parsedToDos;    // 여기서 찾은 item, localStorage를 update
  parsedToDos.forEach(paintToDo);
}

/* 
  index.html 실행 
  > localStorage의 data를 모두 지운 후 다시 작성 (name : yeji, to-do : a, b, c, d)
  > console 창에 toDos 작성 (4개 다 잘 들어와있는지 확인) 
  > 새로고침(todoList 그대로 있어야 함) 
  > todo의 "b" 삭제
  > console 창에 다시 toDos 작성 
    (그대로 4개 일 것 => 이유 : variable의 type때문 [☆id는 number☆])
    deleteToDo()에서 li.remove() 아래에 li의 id를 console.log 해보면
     -> console.log(li.id); : type 안나옴 => 해결방법 : console.log(typeof li.id);  => String 출력

     * li.id == String 이고, toDo.id == number type이다.
     ∴ 따라서 아무것도 지워지지 않는 것

     => 그렇다면 parseInt를 사용해서 String을 숫자로 바꿔주자 (> deleteToDo()으로 이동)

*/