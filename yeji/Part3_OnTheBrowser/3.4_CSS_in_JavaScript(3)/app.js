// className : 이전에 사용했던 class는 상관하지 않고, 모든 것을 교체한다.
/* 
classList : class들의 목록으로 작업할 수 있게끔 허용해준다.
            ex. contains() function : 내가 명시한 class가 HTMl element의 class에 포함되어있는지 말해주는 function
*/

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
  // const clickedClass = "clicked";

  // HTML에서 볼 수 있듯이, 모든 class name들을 교체하지 않을 것
    // if(h1.classList.contains(clickedClass)){
    //   h1.classList.remove(clickedClass);
    // }else{
    //   h1.classList.add(clickedClass);
    // }

  // 더 쉽게 사용할 수 있는 function으로 작성하기 : 그 중 하나가 "toggle function"
  // toggle() : class name이 존재하는지 확인 (만약, class name이 존재한다면 toggle은 class name을 제거하고, 존재하지 않는다면 toggle은 class name을 추가)
  // => h1의 classList에 class name이 포함되었다면 제거, 포함되지 않았다면 추가
  // 아래의 경우, clicked를 한 번만 사용하면 되기 때문에 variable을 사용하지 않고 그대로 적어주기 (String을 반복하는 순간, const를 생성하면 된다.)
  h1.classList.toggle("clicked");  // toggle은 h1의 classList에 clicked class가 이미 있는지 확인해서 없으면 classList에 추가, 있다면 clicked를 제거해줌

}

h1.addEventListener("click", handleTitleClick);
