const clock = document.querySelector("#clock");

clock.innerText = "00:00:00";

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hours}:${minutes}:${second}`;
}

/* interval */
//일정시간마다 반복해서 실행되는 함수
//페이지 로드 될 때 clock 바로 실행되도록 getClock() 선언
getClock();
setInterval(getClock, 1000);
