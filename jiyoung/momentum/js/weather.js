const API_KEY = "a728865d6df6756e7838cdecbe2ecd16";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const log = position.coords.longitude;

    //units=metric: 온도 섭씨로
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
        });
}

function onGeoError(){
    console.log("Can't find you. No weather for you");
}

/* navigator.geolocation.getCurrentPosition() */
// 현재 위치 얻을 수 있음
// 인수로 성공시 받는 함수와 에러시 받는 함수를 포함해야 함
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);