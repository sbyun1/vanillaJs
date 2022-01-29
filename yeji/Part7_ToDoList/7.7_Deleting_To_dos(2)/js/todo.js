// array에서 어떻게 element를 삭제하는지 알기 위해서 paintToDo에서 어떤 일이 일어나는지 이해해야된다
/* 
  완전 중요함 ! 꼭 이해해야 하는 부분
    - forEach() : paintToDo()를 parsedToDos 배열의 item(요소)마다 실행
    ☆★ forEach는 paintToDo를 기본적으로 실행한다 ★☆
    forEach : 각각의 item을 주고, item이 object가 되는 것

  * filter * 
    forEach와 비슷한 작업
    if you want to delete sth from the array, 실제로 array에서 지우는 것이 아니라, 지우고 싶은 item을 빼고 새 array를 만듦 (item을 지우는 것이 아니라 제외하는 것)
    ∵ without the item that i want to delete(지우고 싶은 item을 제외한다)

    => filter function 사용
    ex. [1, 2, 3, 4].filter()
        -> array가 있다면, filter는 filter함수가 필요하다고 요청

        * function 생성
          function sexyFilter(){

          }
        
        -> filter는 forEach와 비슷함 
          : filter는 sexyFilter를 호출 
            > 1, 2, 3, 4에 sexyFilter가 차례대로 실행 
              sexyFilter(1)
              sexyFilter(2)
              sexyFilter(3)
              sexyFilter(4)
            > 다시 filter는 sexyFilter에 1, 2, 3, 4를 넣어서 부를 것 -> [1, 2, 3, 4].filter(sexyFilter)
            > sexyFilter 함수는 반드시 true를 return 해야 함
            > 만약 새 array에서 이 object를 유지하고 싶다면, 다시 sexyFilter함수는 반드시 ture를 return해야함 (만약 false를 return하면 그 item은 새 array에 포함되지 않을 것)
            == 이 뜻은 JS가 sexyFilter를 네 번 부른다는 뜻

            > true를 return하면 JS는 1을 유지한다.(2, 3, 4도 ture면 유지O)
            > 새로 만들어지는 array 안에 1, 2, 3, 4가 있음
              만약 3번째 단계에서 false를 return하면 JS는 3을 제외하고 1, 2, 4만 유지

    # 이제 array의 모든 element를 유지하는 함수를 만들어보자 
    (item에 대해 신경쓰지 않음 + item을 저장할 variable도 생성하지 X + JS가 item을 보내겠지만 우린 신경쓰지 않고 무조건 return true만 하면 끝)
          ex. 개발자 도구 > console창 > function sexyFilter(){return true} 입력  => undefined 출력
              개발자 도구 > console창 > [1, 2, 3, 4, 5].filter(sexyFilter) 입력  => [1, 2, 3, 4, 5] 출력 (sexyFilter는 모두 true이니까 모든 item이 유지되어야 한다)  
    
    # false를 return하는 sexyFilter 만들기
          ex. 개발자 도구 > console창 > function sexyFilter(){return false} 입력  => [] 출력 (비어있는 array 출력)

    # 3번만 false를 return하도록 만들기
    (item을 저장할 공간을 만들어야 함)
          ex. 개발자 도구 > console창 > function sexyFilter(item){return !== 3} 입력  => undefined 출력      
              => item이 3이 아니면 true를 return 하도록 만듦   
          ex. 개발자 도구 > console창 > [1, 2, 3, 4, 5].filter(sexyFilter) 입력  => [1, 2, 4, 5] 출력
              1 !== 3 (true)
              2 !== 3 (true)
              3 !== 3 (false)
              4 !== 3 (true)
              5 !== 3 (true)    
            -> 3은 false이기 때문에 제외되고 나머지 true만 출력

    # 다른 예제로 filter 함수 만들기
    // 1)
      const arr = ["pizza", "banana", "tomato"]             => undefined 출력
    
    // banana를 지우고 싶은 경우(= banana가 아닌 element는 남기고 싶은 경우), filter 함수는 어떻게 만들까?
      function sextFilter(food){return food !== "banana"}   => undefined 출력
    
      arr.filter(sexyFilter)                                => ["pizza", "tomato"] 출력

      => sexyFilter 함수가 할 일 : 질문을 던지는 것 혹은 item을 제외할 지 

    // 2)
      const arr = [1234, 5454, 223, 122, 45, 6775, 334]

      // 1000 보다 큰 수는 지워보기
      function sexyFilter(num){return num <= 1000}

      arr.filter(sexyFilter)
*/

/* toDos DB가 어떻게 생겼는지 생각해보자 
        - object와 id가 존재
          ex. [{text:"a","id":1612354866864}, {text:"b", .....}]
        
        - object(위의 예제)를 console에 copy&paste

        - copy&paste한 것을 toDos라고 생각하자
        - 예시로 내가 지우고 싶은 id가 1612354866864라고 가정해보자
        - function 생성
          function sexyFilter(todo){ return todo.id !== 1612354866864}
          * 기억할 것 : todo는 object가 될 것이라는 걸 기억하자
        - filter 사용
          todos.filter(sexyFilter)

    # 다른 예제로 다시 연습
        const todos = [{text:"lalala"}, {text:"lololo"}]
        function sexyFilter(todo){return todo.text !== "lololo"}
        todos.sexyFilter()
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
  li.id = newTodo.id;

  const span = document.createElement("span");
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
  console.log(parsedToDos);  

  parsedToDos.forEach(paintToDo);
}