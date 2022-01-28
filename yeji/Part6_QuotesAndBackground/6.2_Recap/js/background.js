// 1. img 폴더에 있는 사진 이름과 동일하게 array 생성
    const images = ["0.jpg", "1.jpg", "2.jpg"];

// 2. 랜덤 이미지 가져오기
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    //console.log(chosenImage);

// 3. HTML에 실제로 이미지 넣기 (JS에서 HTML element 생성)
    const bgImage = document.createElement("img");
    //console.log(bgImage);

// chosenImage를 추가해서 String으로 만들기
    bgImage.src = `./img/${chosenImage}`;
    // console.log(bgImage);

// bgImage를 body에 추가하기
document.body.appendChild(bgImage);