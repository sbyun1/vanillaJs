const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();

  // "1".padStart(2,"0"); --> String 최소 길이를 2로 설정. String이 한 자리 수일 때 시작 부분에 0 추가.
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
  // clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

//바로 호출
getClock();
//일정 시간마다 같은 내용 호출 : setInterval(함수명, 시간); 5000ms : 5s
setInterval(getClock, 1000);

//setTimeout(함수명, 얼마나 기다릴지);
//setTimeout(sayHello, 5000);

