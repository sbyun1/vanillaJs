const h1 = document.querySelector("div.hello:first-child h1");
// querySelectorAll < 모든걸 가져오고 싶을때


function handleTitleClick(){
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick); // 가능지 확인