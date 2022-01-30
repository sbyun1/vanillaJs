// toDo를 삭제하는 button 추가하기 (JS에서 버튼 생성)

const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

// toDoList의 li를 삭제할 수 있는 button의 function 생성
// X를 눌러도 어디에 있는 것을 click했는지 알 수 없음 => li 안에 button을 넣어놨기 때문에 event가 click된 위치를 console에서 확인할 수 있음
// = click target이 무엇인지를 체크할 수 있다는 것 -> parentNode : li 라는 것을 볼 수 있음 (우리가 찾는 것 : parentNode || parentElement)
// 어떤 게 click 되었는지(button 출력됨) 알 수 있지만, parentNode 혹은 parentElement를 얻고 싶은 것

// target : 클릭된 HTML element + 모든 HTML element에는 하나 이상의 property가 있음

function deleteToDo(event){
  // click된 게 어떤 것인지 차이를 확인할 수 있음
  // parentElement는 클릭된 element의 부모
  // event.target : button (자식, child) -> 이 child는 parent를 갖고 있다. (button의 parent = li)
  // 이걸 통해서 누구를 삭제해야 하는지 알 수 있음
  // console.dir(event.target.parentElement);

  // 어떤 것이 클릭되었는지 알 수 있음
  //console.dir(event.target.parentElement.innerText);

  // console.log에 넣으면 li를 볼 수 있음
  // console.log(event.target.parentElement);

  // li에 저장하기
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");

    // span innerText를 먼저 가져오기
    span.innerText = newTodo;
    
    // button 가져오기
    const button = document.createElement("button");

    // 모든 것을 append 하기 전에 버튼 생성
    button.innerText = "❌";

    // button click event를 확인해서 function 실행시키기
    button.addEventListener("click", deleteToDo);

    // 버튼을 li에 추가하기 (span을 먼저 추가하고, button을 추가)
    /* 
      주의할 점
        ☆★ "append"는 맨 마지막에 놓여야 한다 ★☆
    */
    li.appendChild(span);
    li.appendChild(button);


    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);


/* 순서 
  1) X 버튼을 클릭할 때, event를 얻게 될 것
  2) event는 target을 준다.
    => const li = event.target.parentElement();
    target = button , 이 button은 parent를 갖고 있다.
    위의 코드를 통해 그 button의 parent에 접근할 수 있다. => i에 접근하는 것
*/