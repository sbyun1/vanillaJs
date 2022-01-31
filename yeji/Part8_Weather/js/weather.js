// 이 함수는 사용자의 geolocation(위치)를 알려줌
// 그리고 화면에 날씨를 보여줄 것

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 첫 번째 단계
// 사용자의 위치 나타내기

const API_KEY = "a62f8a541f8c2ff7ad318b88befcc843";

// 사용할 함수 : navigator
function onGeoOk(position){
    // 내 위치가 잘 나오는지 확인
    // console.log(position);

    // 위도 (latitude)
    const lat = position.coords.latitude;
    
    // 경도 (longitude)
    const lon = position.coords.longitude;

    console.log("You live in", lat, lon);

    // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    // units=metric (temperature) 추가
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`


    // console에 출력되는 url로 넘어가서 정보가 잘 뜨는지 확인하자
    // console.log(url);
    
    // fetch를 이용해 url을 부를 것 (call the url)
    // 개발자 도구 > Network > F5 > Name에 weather?lat=37.~~ 나오는 것 : JS가 URL을 부르는 것
    // 실제로 url에 갈 필요없이 JS가 대신 url을 부른다
// fetch(url);
    // fetch를 작동시키는 것은 간단하지 않다. fetch는 promise이고, promise는 당장 뭔가 일어나지 않고 시간이 좀 걸린 뒤에 일어나는 것을 의미
    // URL을 fetch하고, response를 받아야 한다. -> 내용을 추출했으면 data를 얻을 것
    // data.weather => weather은 array이다. => 그래서 array의 첫 번째 요소의 main을 얻어야 한다.
    fetch(url)
        .then(response => response.json())
        .then(data => {
        
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        
        // 정보 확인하기
        // console.log(data.name, data.weather[0].main);
        
        // variable 생성해서 담아주기
        // const name = data.name;
        // const weather = data.weather[0].main;
        
        city.innerText = data.name;
        
        // weather.innerText = data.weather[0].main;
        // 온도를 추가해보자 : 날씨 이름 / data.main.temp
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

// getCurrentPosition() : argument 2개 필요 (1: 모든게 잘 됐을 때 실행될 함수, 2: 에러가 발생했을 때 실행될 함수)
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
/* 
    1. 만약 위치를 받는데 문제가 발생했을 때(user가 위치를 받는 것이 불가능했다면), 알려줘야함 -> onGeoError() alert
    2. 위치를 받는 것에 성공했다면, onGeoOk 실행 -> JS가 user의 위치를 전달해줄 것 
        -> getCurrentPosition 구글 검색
        -> getCurrentPosition()은 success와 error를 받는다
            success() : GeolocationPosition object 하나를 입력받는다.  == JS가 GeolocationPosition object를 준다는 말
                        하나의 input parameter로 user의 위치를 얻는다
*/


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 두 번째 단계
// lat과 lng (위도와 경도)의 숫자들을 장소로 바꿔줄 서비스를 사용해야 함

// API : 다른 서버와 이야기할 수 있는 방법
/* 
    API를 열어줘야 함 
    -> openweathermap.org 사이트로 이동 
    -> 계정 만들기(sign in) [email : yedoong919@gmail.com | pw : %^yES_ez58$qh7K] 
    -> 사용할 API : Current Weather Data API
    -> Current Weather Data API의 API doc 클릭
    -> By geographic coodinates의 API call
       api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
        : URL에 좌표를 보낼 수 있다는 뜻
        : 위의 URL에서 정보를 응답할 것

    // 현재 나의 latitude와 longitude를 copy&paste해주고, openweathermap.org 사이트 내 프로필을 클릭하면 My API Keys가 있음
       api.openweathermap.org/data/2.5/weather?lat=37.4000523&lon=126.9362674&appid=a62f8a541f8c2ff7ad318b88befcc843

    // 위에 코드를 추가 작성한 후, 이제 화면에 날씨를 보여줘야 함
    -> openweathermap.org 사이트에서 어떻게 바꿀 수 있는지 확인해야 함
    -> 문서를 보면 ex. unit을 URL에 같이 보낼 수 있다
*/
