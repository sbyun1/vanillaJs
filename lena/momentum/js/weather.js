const API_KEY = "64a7b4b3c4d0714693febbdc354164c3";

function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name; 
            weather.innerText = `${data.weather[0].main}/ ${data.main.temp}°`
        });
    //fetch:: JS requests the url and then get a response
            //like jQuery ajax()
};

function onGeoError(){
    alert("Can't find you :(")
};

navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoError);
//if success, JS will return geolocation position as a parameter
//need to have two function: for success and for fail

//OpenWeatherMap API (https://openweathermap.org/)