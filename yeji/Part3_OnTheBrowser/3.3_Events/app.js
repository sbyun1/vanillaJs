// class hello를 가진 div 내부의 first-child인 h1을 찾아오는 것
const h1 = document.querySelector("div.hello:first-child h1");
console.log(h1);     
//element의 내부를 보고싶다면 console.log 대신 console.dir을 사용
console.dir(h1);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Event
// event를 listen하는 방법 => addEventListener() 사용
function handleTitleClick(){
  h1.style.color ="blue";
  console.log("h1 was clicked!");
}

function handleMouseEnter(){
  //console.log("mouse is here!");
  h1.innerText = "Mouse is here!";
}

function handleMouseLeave(){
  h1.innerText = "Mouse is gone!";
}

function handleWindowResize(){
  // window가 resize(화면 크기가 바뀔) 될 경우, document를 호출하고, document가 body에 접근할 수 있게 해준다
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
  alert("copier!");
}

function handleWindowOffline(){
  alert("SOS no WIFI");
}

function handleWindowOnline(){
  alert("ALL GOOOD");
}


// addEventListener(무슨 event를 listen 할 것인지, functionName)
h1.addEventListener("click", handleTitleClick);      // 사용자가 title을 click하는 것을 listen할 것
// h1.onclick = handleTitleClick;

/* 정 리 */
/*
  1. h1 element를 document.querySelector를 사용해 element를 찾아옴
  2. addEventListener를 추가해 click event를 listen하고, click event가 발생하면 handleTitleClick function이 동작
    ☆★ 여기서 handleTitleClick function을 실행하지 않게 하는 것이 굉장히 중요 ★☆
    ∴ function을 바로 실행시키지 않고, 이 function을 JS에 넘겨주고, user가 title을 click할 경우에 JS가 실행 버튼을 대신 눌러주길 바라는 것
    사용자가 직접 함수의 실행버튼을 click하지 않고, JS에 function 이름을 넘겨준 후, user가 click할 경우 JS가 사용자 대신 실행버튼을 눌러주게 만드는 것
    * 그렇기 때문에 argument에 작성 시, handleTitleClick()이 아닌 handleTitleClick 만 작성해야 바로 실행되지 않음
    HTML element(h1)를 가져와서 , addEventListener function을 실행시켜 주면 된다.
*/


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* listen하고 싶은 event를 찾는 가장 좋은 방법
  1. Mozilla Developer Network인 MDN에 검색해보는 방법
    "element Name" + "html element mdn" + google search
      ex. h1 html element mdn
    링크에 "-Web APIs | MDN" 라는 문장이 포함된 페이지 찾기 (https://developer.mozilla.org/ko/docs/Web/API/HTMLElement)
  2. console.dir(element Name); 출력
    on으로 시작되는 것을 event로 사용할 수 있음
      event로 사용할 때는 onbort 대신 abort로 사용해야함
*/

// console.dir(elementName); 
// onmouseenter : mouse가 elementName 위에 올라 갈 때 (not click)
h1.addEventListener("mouseenter", handleMouseEnter);
// h1.onmouseenter = handleMouseEnter;
h1.addEventListener("mouseleave", handleMouseLeave);
// h1.onmouseleave = handleMouseLeave;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// event 내부를 살펴보고, event를 listening하는 또 다른 방법

/* event listening 하는 방법 
  1. addEventListener()
  2. oneventname property에 event listener를 할당
    // h1.addEventListener("click", handleTitleClick); 대신 h1.onclick = handleTitleClick; 으로 작성해도 됨
  addEventListener()의 장점
   - 나중에 removeEventListener를 사용해 event listener를 제거할 수 있기 때문
*/

// window 관련 event (resize) 
  window.addEventListener("resize", handleWindowResize);
  // document의 body, head, title은 중요하기 때문에 console에서 직접 document.body 식으로 호출할 수 있고,
  // 나머지 element들은 querySelector나 getElementById 등으로 찾아와야 함

  // copy event
  window.addEventListener("copy", handleWindowCopy);

  // wifi event
  window.addEventListener("offline", handleWindowOffline);
  window.addEventListener("online", handleWindowOnline);