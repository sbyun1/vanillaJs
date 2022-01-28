const clock = document.querySelector("h2#clock");

// interval이란? 매번 일어나야하는 무언가라고 함.
//ex) 2초마다 무언가를 실행할때

function sayHello(){
    console.log("hello");
}

//set할때 첫번째는 실행할 함수, 두번째는 몇초마다 실행할지
//단위는 ms여서 1000ms당 1초
// setInterval(sayHello, 5000)


//타임아웃도 동일하게 실행할 함수, 두번째는 몇초마다 실행할지
//단위도 ms
//setTimeout(sayHello, 5000);


function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

//padStart란?
//String에만 추가할수 있음, string의 길이가 앞의 숫자가 첫번째
//argument 길이에 해당하지 않으면 앞글자에 글자를 추가할수있음
//ex) "1".padStart(2,"0")
//결과값 = "01"
//끝글자에 글자를 추가하는건 padEnd