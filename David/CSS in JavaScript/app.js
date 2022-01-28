// const h1 = document.querySelector("div.hello:first-child h1")

// function handleMouseEnter(){
//     h1.innerText = "마우스 클릭했어요!";
// }

// function handleTitleClick(){
//     const currentColor = h1.style.color;
//     let newColor;
//     if(currentColor === "blue"){
//         newColor = "tomato";
//     }else{
//         newColor = "blue";
//     }
//     h1.style.color = newColor;
// }

// h1.addEventListener("click",  handleMouseEnter);
// h1.addEventListener("click",  handleTitleClick);

// step 1. 엘리멘트 요소를 찾고
// step 2. 이벤트 리스너를 사용한다. addEvenetListener
// step 3. 이벤트가 반응한다.

const h1 = document.querySelector("div.hello:first-child h1")

function handleTitleClick(){
    const actvieClass = "active"
    // if(h1.classList.contains(actvieClass)){
    //     h1.classList.remove(actvieClass);
    // }else{
    //     h1.classList.add(actvieClass);
    // } toggle이라는 자체 function을 이용해볼것
    h1.classList.toggle(actvieClass); // 위의 5줄짜리 코드를 toggle을 이용하면 사용할 수 있음.
    // 있으면 삭제, 없으면 추가한다.. 훨씬 코드가 간결해진다.
}
h1.addEventListener("click", handleTitleClick);