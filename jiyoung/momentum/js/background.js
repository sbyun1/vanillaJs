const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

/* createElement */
//element 생성되지만 document 안에 들어가있지는 않음, js 안에만 있는 상태
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

/* appendChild */
// 이거로 documnet에 아까 생성한 element 넣어줌
// append 맨 뒤, prepend 맨 앞
document.body.appendChild(bgImage);