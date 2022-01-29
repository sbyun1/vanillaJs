// 현재 toDos는 localStorage에 있지만 새로고침하면 화면에 나타나지 않음

const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  /* 
  JSON.parse : array를 단순한 String으로 바꿀 수 있다
   ex. JSON.parse("[1, 2, 3, 4]")
      => 0 : 1
         1 : 2
         2 : 3
         3 : 4
      JS가 이해할 수 있는 살아있는 array로 만들 수 O   

    * JSON.parse(localStorage.getItem("todos"))
      => ["a", "b", "c"]                        : 아래의 단순한 String을 JSON.parse 안에 넣으면 실제로 무언가를 할 수 있는 배열을 얻게되는 것
    
    * localStorage.getItem("todos")
      => "[\"a\",\"b\",\"c\"]"                  : 단순한 String
  */
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
    
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

/* 순서
    - toDos를 가지고 오기 (단순한 text)
    - saveToDos()에 1번에서 가져온 단순한 text를 살아있는 array로 변환해주기 (JSON.parse() 사용)
    - saveToDos() 가져오기
*/

// parsedToDos.forEach()작성 이후, function을 하나 생성해보자
// forEach에서 이 function을 부르면 array의 item 마다 function 실행
// JS는 localStorage에 저장된 array를 가지고, sayHello(item)을 실행하는 것
function sayHello(item){
  console.log("this is the turn of", item);
}

// saveTodos 가져오기
const savedToDos = localStorage.getItem(TODOS_KEY);

// console.log(savedToDos);    // => just String

// savedToDos가 null이 될 때도 있음 / savedToDos가 localStorage에 존재하면
if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  console.log(parsedToDos);   // => array

  /* parsedToDos가 array이기 때문에 forEach라는 것을 갖고 있다.
      + forEach는 function을 실행하게 해주는데, 그 array에 있는 각각의 item에 대해서 실행해준다.
      하지만 forEach는 array의 item들에 대해 한 개의 function만 실행할 수 있게 해준다.
      지금 내가 어떤 item을 사용하고 있는지 모른다면 완전 무용지물이다. => 가장 좋은 건 처리되고 있는 item이 어떤 것인지 아는 것
      -> 아래의 toDoForm.addEventListener("submit", handleToDoSubmit); 에서 submit eventListener가 event(argument)를 그냥 제공해주는 것처럼 JS는 지금 처리되고 있는 item 또한 그냥 제공해준다.
  */ 
  //parsedToDos.forEach(sayHello);
  
  // 위의 sayHello()과 91행을 동시에 사용하는 것과 아래 코드 한 줄은 동일한 결과를 출력 => 아래 한 줄 코드를 작성하는 것이 function을 작성할 때 더 짧게 쓸 수 O
  parsedToDos.forEach((item) => console.log("this is the turn of", item));
  // => parsedToDos에 있는 각각의 item에 대해서 console.log를 할 것이라는 의미
  // "=>"로 작성하는 것을 arrow function(화살표 함수)라고 부름
}

/* JS에서 가장 중요한 것은 "Data Structure" 
    대부분의 경우, array 각각의 item을 가지고 무언가를 하고 싶을 것
    ex. toDo들 (각각의 item)로 뭔가를 한 다음, 안에 있는 요소들로 뭔가를 하고 싶을 것이다.
  => 즉 array에 있는 각각의 item에 대해 너는 function을 실행하고 싶을 것 (화면에 뿌려주거나, 텍스트를 변형하고싶거나 등)
    array에 있는 각각의 item에 대해서 function을 실행하자

  JS는 array에 있는 각각의 item에 대해 function을 실행할 수 있도록 해준다.
*/
