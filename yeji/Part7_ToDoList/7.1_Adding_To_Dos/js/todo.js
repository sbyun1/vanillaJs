const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

// function 생성 : toDo를 그리는 역할을 담당할 function
//                 -> 하지만 이 function은 지금 그려야할 것이 뭔지 모름 => argument를 주자
function paintToDo(newTodo){        // 여기에 넣은 argument는 text가 될 것
    // console.log("i will paint", newTodo);

    // 이전에 background에서 element를 JS에서 생성해서 body에 추가했음
    // 이와 같이 li(list item)을 만들어서, 그 li를 ul(list)에 추가할 것
    // 두 개의 element를 생성 => 하지만 span은 li의 내부에 있지 않다. : appendChlid를 사용해서 li안에 span이라는 child를 가지게 만들기
    const li = document.createElement("li");
    const span = document.createElement("span");

    // 이제 li 안에 span이라는 자식을 갖게 만듦
    li.appendChild(span);

    // span.innerText를 이용해서 newTodo를 넣기
    span.innerText = newTodo;       // span의 text는 handleToDoSubmit에서 온 newTodo text가 되는 것

    // console.log(li)해서 어떻게 생겼는지 확인해보자
// console.log(li);
    // li > li 안에 span > span 안에는 작성한 text가 생긴 것을 볼 수 있음

    // 새로운 li를 list에 넣기
    toDoList.appendChild(li);

    /* 여기까지 HTML에 들어갈 element를 만든 것 
        1. li와 span 만들기
          => const li = document.createElement("li");
          => const span = document.createElement("span");

        2. span을 li 내부에 넣기
          => li.appendChlid(span);

        3. text를 span 내부에 넣기
          => span.innerText = newTodo;                      : span안에 넣은 새로운 text는 사용자가 form에서 우리에게 준 newTodo 값

        4. 새로운 li를 list(toDoList)에 추가하기
          => toDoList.appendChild(li);
    */
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;                                // 1) toDoInput에서 value를 얻어서
    toDoInput.value = "";
    // handleToDoSubmit()이 paintToDo()을 사용하게 되는 것
    // paintToDo() 호출 > newTodo 보내기
    // newTodo : input의 value를 비우기 전의 값을 나타내는 String
    // 그런 다음 그 입력값을 paintToDo에 넣어서 호출하는 것
    paintToDo(newTodo);                                             // 2) paintToDo라는 새로운 function에 그 값을 보내는 것
}

toDoForm.addEventListener("submit", handleToDoSubmit);


// 현재까지의 문제
// 1. toDoList가 새로고침하면 다 사라짐 (저장 X)
// 2. toDoList에 item을 추가할 수는 있지만 지울 수 없다는 것