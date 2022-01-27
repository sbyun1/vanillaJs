const clock = document.querySelector("#clock");

clock.innerText = "00:00";

/* interval */
function sayHello(){
    console.log("hello");
}

setInterval(sayHello, 5000);

/* timeout */