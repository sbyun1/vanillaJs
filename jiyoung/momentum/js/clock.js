const clock = document.querySelector("#clock");

clock.innerText = "00:00:00";

/* interval */
function getClock(){
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

//페이지 로드 될 때 clock 바로 실행되도록 getClock() 선언
getClock();
setInterval(getClock, 1000);

/* timeout */