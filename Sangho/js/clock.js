const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
     // String 으로 형변환 후 나오는 값을 padstart 2자리 변형 0추가 코드
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    // innerText 로 index의 clock에 추가
}
getClock();
setInterval(getClock, 1000);

// setInterval(sayHello, 5000); // 5초마다 호출
// setTimeout(sayHello, 5000); // 5초 후에 호출

// padstart > string에서 길이를 n수로 만들 수 있는 function
// padEnd > string에서 길이를 n수로 만들 수 있는 function
// "1".padstart(2,"0") < start 가 1로 시작하면 2자리로 만들어라 0을 추가해서

