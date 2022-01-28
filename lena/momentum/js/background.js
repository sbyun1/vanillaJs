const images = ["0.jpg", "1.jpg", "2.jpg"];
const todaysImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");
bgImg.src = `img/${todaysImg}` // img/ + img[] -> <img src = "img/0.jpeg"/>

//document.body.appendChild(bgImg); 
const bg = document.getElementById("bg");
bg.appendChild(bgImg);
bgImg.id = "bgimg";

/*NOTES:
    1. document.createElement() :: creates element from JS and insert into HTML 
    2. document.appendChild() :: adds HTML element
*/