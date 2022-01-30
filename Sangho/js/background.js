const images = ["0.jpeg","1.jpeg","2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// java_script 에서 html element를 생성 > createElement
const bgImage = document.createElement("img");
// img > chosenImage 연결
bgImage.src = `img/${chosenImage}`;

// document에 존재하지 않는 element를 추가 (body)>appendChild함수 사용
document.body.appendChild(bgImage);