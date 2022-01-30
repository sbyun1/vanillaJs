// style을 CSS 파일에서 바꿔보자
// JS 파일에서는 colorName을 사용하지 않을 것이고 styleName도 적지 않을 것
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
  // CSS에 작성한 active class를 h1코드에 적용시키기
    //h1.className = "active";
  
  // 여기의 h1.className은 getter이면서 setter이다 => 이 말의 뜻은 만약 내가 console.log로 h1.className을 출력한다면 
    //console.log(h1.className);
  // 현재의 class를 얻어올 수 있고, class를 변경(update)할 수도 있다. 

  // if문 사용하여 default > active > default > active ... 로 class 변경하기
  const activeClass = "active sexy-font";

    if(h1.className === activeClass){
      h1.className = "";
    }else{
      h1.className = activeClass;
    }

  // String("active")을 두 번 사용하고 있는데 이는 error 발생 위험이 있다. 
    // active는 지어낸 이름이기 때문에 active 대신 clicked라고 이름을 지을 수도 있다.
    // 이렇게 지어낸 이름을 가지고 모든게 제대로 동작하려면, 그 이름을 정확하게 작성해야 한다.
  // 정확하게 사용하려면 variable에 담아 사용하면 error가 발생할 수 있는 부분을 축소시키자

  // 여기서 또 한가지의 버그
  // HTML에서 h1태그에 class가 이미 존재하는 경우라면?
  // 처음 실행 시, 문제없이 initial class가 잘 작동하지만, h1 클릭 시, class가 완전히 replace(대체)되어버린다.
  // 이런 경우, const activeClass = "active sexy-font" class 추가해주기
}

h1.addEventListener("click", handleTitleClick);