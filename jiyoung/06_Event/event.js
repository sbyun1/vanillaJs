const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    title.style.color = "blue";
}

function handleMouseEnter(){
    title.innerText = "Mouse is here";
}

function handleMouseLeave(){
    title.innerText = "Mouse is gone";
}

/* addEventListner */
//클릭 이벤트 발생 시 handleTitleClick function이 동작하길 원함
//handleTitleClick();이 아닌 이유: ()가 있으면 실행버튼 클릭하면 작동하는데 클릭 이벤트가 발생했을 때만 작동하길 원하기 때문
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
