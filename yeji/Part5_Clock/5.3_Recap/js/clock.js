const clock = document.querySelector("h2#clock");

// 1. function 생성
function getClock(){
    // 2. Date Object 생성 (Date Object : 함수를 호출하는 때의 현재 날짜와 시간을 알려줌)
    const date = new Date();
    
    // 3. number type으로 받았는데, 이것을 String으로 변경
    // + padStart() function : 내가 갖고 있는 String을 원하는 길이만큼 길게 만들어야 할 때 사용 (앞 쪽에 문자를 끼워넣는 것)
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    
    // 4. 구해진 시간을 clock의 innerText로 넣어줌 (HTML의 h2 태그)
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();

// clock을 실시간으로 보이게 하는 부분
// setInterval() : 1000ms(1초)마다 값이 바뀌게 해줌 (setInterval을 사용하지 않는다면 매 초마다 바뀌지 않아서 한번만 일어난다는 것)
//                 이렇게 매 초마다 getClock()을 실행시키는 것 (매 초마다 function을 호출 => 실시간처럼 보임)
setInterval(getClock, 1000);