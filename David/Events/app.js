//console.log는 단순히 출력만 해주지만 console.dir를 쓰면 object 내부의 Elements를 출력해준다.
//on~~ 들은 events에 속함

const title = document.querySelector("div.hello:first-child h1");

// console.dir(title);

// title.style.color="blue";

//event란? 엔터, 마우스 hover, 클릭, 기타 등등등 모든 행위들이 event에 속한다.
//dir로 봤을때 내부 elements중 on으로 시작하는 애들은 모두 event라고 생각하면 됨.

function handleTitleClick(){
    title.style.color = "blue";
}

function handleMouseEnter(){
    title.innerText = "마우스가 올라갔나?"
}

function handleMouseLeave(){
    title.innerText = "마우스가 떠났나?"
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("복사됐습니다.")
}

function handleWindowOffline(){
    alert("인터넷 연결이 없습니다.")
}
function handleWindowOnline(){
    alert("인터넷이 연결되었습니다.")
}

// title.addEventListener("click", handleTitleClick);
// //이벤트 리스너는 말 그대로 event를 listen 한다.. 리슨중, 해당 이벤트가 발생한다면 뒤의 파라미터가
// //작동한다.
// title.addEventListener("mouseenter", handleMouseEnter);
// title.addEventListener("mouseleave", handleMouseLeave);

title.onclick = handleTitleClick
title.onmouseenter = handleMouseEnter
//이런식으로도 사용 가능, 굳이 리스너로 기다리지않아도 됨, 대신 리스너를 사용하면 removeEnventListner
//를 사용할 수 있기 떄문에 활용도가 더 높음

window.addEventListener("resize", handleWindowResize);
// resize는 브라우저의 크기가 변경됐을 때 작동하는 event

window.addEventListener("copy", handleWindowCopy)
// copy는 클립보드 이벤트 중 하나로 유저가 브라우저를 copy(컨트롤+C) 했을때 작동하는 이벤트

window.addEventListener("offline", handleWindowOffline)
window.addEventListener("online", handleWindowOnline)
// online, offline은 인터넷 커넥션 상태를 감지한다.





