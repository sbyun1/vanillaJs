function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    console.log("You live it", lat, lng);
}

function onGeoError(){
    console.log("Can't find you. No weather for you");
}

/* navigator.geolocation.getCurrentPosition() */
// 현재 위치 얻을 수 있음
// 인수로 성공시 받는 함수와 에러시 받는 함수를 포함해야 함
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);