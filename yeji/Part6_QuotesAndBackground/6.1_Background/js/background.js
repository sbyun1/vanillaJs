// 1. Array에서 랜덤하게 한가지 element를 골라내기
    const images = ["0.jpg", "1.jpg", "2.jpg"];

/* 2. 가장 중요한 부분 : 숫자를 고르는 부분 */
    const chosenImage = images[Math.floor(Math.random() * images.length)];

// 3. JS에서 HTML element 생성하기
    const bgImage = document.createElement("img");

// 4. img를 만들고 몇가지 property를 넣어주기
    bgImage.src = `./img/${chosenImage}`;

// 5. 생성한 bgImage를 body에 append 시키기 (제일 마지막에 들어감)
// 가장 위에 위치시키고 싶다면 prepend 사용
    document.body.appendChild(bgImage);