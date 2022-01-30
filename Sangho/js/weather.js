
const API_KEY ="2a63a5b1cec1873a18c638a01340b056"
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data =>{
            const weather = document.querySelector("#weather span:first-child")
            const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you.", lat, lng);
}

// 위치좌표를 줄 수 있는 함수
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);