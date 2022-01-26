const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    h1.style.color = "blue";
}

function handleMouseEnter(){
    h1.innerText = "Mouse is here";
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("SOS no WIFI");
}

function handleWindowOnline(){
    alert("all gooood");
}

/* addEventListner */
//클릭 이벤트 발생 시 handleTitleClick function이 동작하길 원함
//handleTitleClick();이 아닌 이유: ()가 있으면 실행버튼 클릭하면 작동하는데 클릭 이벤트가 발생했을 때만 작동하길 원하기 때문
h1.addEventListener("click", handleTitleClick);
//h1.onclick = handleTitleClick;
h1.addEventListener("mouseenter", handleMouseEnter);
//h1.onmouseenter = handleMouseEnter;
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);