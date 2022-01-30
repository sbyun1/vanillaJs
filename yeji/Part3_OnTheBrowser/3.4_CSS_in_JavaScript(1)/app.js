// 클릭할 때 마다 글자색 변경(blue > toamto > blue > tomato > ...)
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
  // 현재 h1의 글자색이 잘 나오는지 확인
    // console.log(h1.style.color);
    // h1.style.color ="blue";
    // console.log(h1.style.color);

  // console.log의 값을 검사해서 만약 h1.sytle.color가 blue일 경우 -> tomato로 / blue가 아니라면 blue로 변경하기
  
  // h1.style.color 코드를 적게 사용하기 위해 변수 생성 (color의 현재 상태를 저장하여 사용하기)
    const currentColor = h1.style.color;
  // currentColor를 if문에서 두 번 사용하는 것을 줄이기 위해 let variable 생성
    let newColor;  

  /* 
    if(h1.style.color === "blue"){
      h1.style.color = "tomato";
    }else{
      h1.style.color = "blue";
    }
  */

  if(currentColor === "blue"){
    newColor = "tomato";
  }else{
    newColor = "blue";
  }
  // 현재까지는 newColor가 h1 스타일에 아무런 영향을 주지 않기 때문에 아래 코드를 추가해야 함
  h1.style.color = newColor;
  
  /* 여기서 중요한 점 */
  // element의 style을 JS에서 직접 변경하는 것보다는 style에 적합한 CSS 파일에서 변경하도록 해보자

}

h1.addEventListener("click", handleTitleClick);

/*
  step 1. element를 찾기
          const h1 = document.querySelector("div.hello:first-child h1");
  step 2. event를 listen 하기
          h1.addEventListener("click", handleTitleClick);
  step 3. 그 event에 반응하기
          function 내 내용
          - 반응 (ex. 무언가를 보여주거나, 감추거나 색깔을 바꾸는 등의 반응)
*/