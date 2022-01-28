const clock = document.querySelector("h2#clock");


// Date Object 사용하기
function getClock(){
    const date = new Date();
    //console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    
}

/* interval : '매번' 일어나야 하는 무언가
    ex) 매 2초마다 무슨 일이 일어나게 만들고 싶을 때 사용
*/
/* setInterval()
    : 두 개의 argument를 받음
    - 첫 번째 argument : 내가 실행하고자 하는 function
    - 두 번째 argument : 호출되는 function 간격을 몇 ms(초)로 할 지 작성
*/

// website가 laod되자마자 getClock()을 실행하고 또 매초마다 다시 실행되도록 만들기
getClock();
setInterval(getClock, 1000);

// function을 딱 한번만 호출하는데, 일정 시간이 흐른 뒤 호출하는 것


// timeout : 일정 시간이 흐른 뒤에 호출하는 것
/* setTimeout()
    : 두 개의 argument를 받음
    - 첫 번째 argument : 내가 실행하고자 하는 function
    - 두 번째 argument : 얼마나 기다릴지 몇 ms(초) 단위로 작성
*/
//setTimeout(sayHello, 5000);