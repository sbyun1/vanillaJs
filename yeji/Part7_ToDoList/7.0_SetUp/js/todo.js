const toDoForm = document.getElementById("todo-form");

/* input의 value 가져오기 (두 가지 방법)

    1. toDoInput을 전체 document에서 찾아볼 수 있다(전체 HTML).
        => document.querySelector("#todo-form input");
        - id가 todo-form인 form 안에서 input을 찾는 것

    2. toDoInput을 toDoForm 안에서만 찾아볼 수도 있다. (이미 위에서 toDoForm을 찾아놨기 때문에 그 안에서 input을 찾을 수 있다)
        => toDoForm.querySelector("input");
        - input을 document가 아닌 toDoForm 안에서 찾을 수 있다.

    1번, 2번 모두 동일한 코드
*/
const toDoInput = document.querySelector("#todo-form input");

const toDoList = document.getElementById("todo-list");

// greetings에서 사용했던 것과 동일하게 사용할 것
/* 복습 
    - form은 submit event를 가진다.
    - function을 만들어, 그 event의 기본 동작 막기 (event.preventDefault() => 페이지 새로고침 막기)  
    - input의 value를 얻어내기
*/
function handleToDoSubmit(event){
    event.preventDefault();
    // 1) toDoInput에 값이 잘 들어가는지 확인
    // console.log(toDoInput.value);

    // 2) toDoInput에 value를 넣고 저장하기
    // newTodo라는 variable에 input의 현재 value를 복사하는 것
    const newTodo = toDoInput.value; 
    // console로 값이 바뀌는지 확인하기 (아래에서 input의 value를 비우는 것때문에 확인)   
    console.log(toDoInput.value);

    // 3) input에 작성 후 , enter를 누르면 input 비우기
    //    - toDoInput의 value에 빈 값("") 넣기
    toDoInput.value = "";

    /* 여기서 중요한 점
        3번에서 input에 작성한 값을 비운다고 해서 newTodo가 비워지는 것은 아님
        ∴ input의 value를 새로운 변수(newTodo)에 복사하는 것이기 때문에 그 이후에 input의 value를 가지고 무얼하든 newTodo에는 아무런 영향 X
    */
    console.log(newTodo, toDoInput.value);  // 여기서는 toDoInput.value는 출력되지 않음 ∴값이 empty("")로 적용되었기 때문에 console.log에 출력 X

}

toDoForm.addEventListener("submit", handleToDoSubmit);