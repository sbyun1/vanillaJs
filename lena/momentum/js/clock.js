const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0"); //getHours.. is number -> cast to String
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //call once when window loads
setInterval(getClock,1000); //repeat every 1000 ms (1 sec)


/*
NOTES:
    1. setInterval(function, time) :: 
        calls the function every x milliseconds -> repeats
    
    2. setTimeout(function, time) :: 
        calls the function after x milliseconds -> no repeats
 
    3. Date() :: JS function that brings current date & time
        -> getHours, getMinutes, getSeconds, getFullYear ....

    4. padStart() :: adds padding to the start of the String
        -> padStart(2,"0") -> if its not min. length of 2, add 0 in front
       padEnd() :: adds String at the end
    */
