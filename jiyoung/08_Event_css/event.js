/* classList */
//class들의 목록으로 작업할 수 있게끔 허용
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const clickedClass = "active"

    if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    }else{
        h1.classList.add(clickedClass);
    }
}

h1.addEventListener("click", handleTitleClick);

/* toggle */
//토큰 존재 -> 토큰 제거, 토큰 존재x -> 토큰 추가
const h2 = document.querySelector("div.hello:first-child h2");

function handleTitleClick2(){
    h2.classList.toggle("active");
}

h2.addEventListener("click", handleTitleClick2);
