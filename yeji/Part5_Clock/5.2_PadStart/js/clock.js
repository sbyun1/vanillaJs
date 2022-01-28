// String을 문자 두 개로 채우기
// 초(ms)가 한 자리 수일 때, "1"이 아닌 "01"로 나타내기

/* padStart()
    : String에 쓸 수 있는 function
    ex) 앞에 쓴 String의 길이를 2로 만드는데, 만약 그 String의 길이가 2가 아니라면 앞쪽에 "0"을 추가하도록 할 수 있음
        "1".padStart(2,"0");        => "01" 출력

        // 길이가 20이어야 하는데 hello 앞을 "x"로 채워서 20자리 String으로 만들어 달라 !
        "hello".padStart(20, "x");  => "xxxxxxxxxxxxxxhello" 출력

   padEnd()
    : 뒤 쪽에 문자를 추가하는 function
    ex) "1".padEnd(2,"0"); => "10" 출력
*/

/* number를 String으로 바꾸는 법
    new Date().getHours()           => 숫자 출력    ex) 19
    String(new Date().getHours())   => String 출력  ex) "19"
*/
const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    //clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    
}

getClock();
setInterval(getClock, 1000);
