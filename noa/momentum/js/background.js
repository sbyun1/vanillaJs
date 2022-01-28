const images = ["0.jpg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// create and add images to html
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

//add this inside of the body
document.body.appendChild(bgImage);