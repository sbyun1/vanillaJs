//getElementById
const title = document.getElementById("title");
// console.dir(title);
title.innerText = "Got you!";
console.log(title.id);
console.log(title.className);


//querySelector : css selector 사용하여 가져올 수 있음
const title = document.querySelector(".hello h1"); //첫 번째 것만 가져옴
//const title = document.querySelector(".hello h1:first-child"); //선택 가져옴
//const title = document.querySelectorAll(".hello h1"); //모두 가져옴
console.log(title);
title.innerText = "Hello";
console.log(title);

// add style
const title2 = document.querySelector("div.hello:first-child h1");
title2.style.color = "blue";
function handleTitleClick() {
  title.style.color = "blue";
}
function handleMouseEnter() {
  title.innerText = "Mouse is here!";
}
function handleMouseLeave() {
  title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

//
// more events
// listen for event!
const h1 = document.querySelector("div.hello:first-child h1");
console.dir(h1);
function handleTitleClick() {
  h1.style.color = "blue";
}
function handleMouseEnter() {
  h1.innerText = "Mouse is here!";
}
function handleMouseLeave() {
  h1.innerText = "Mouse is gone!";
}
function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
  alert("copier!");
}
function handleWindowOffline() {
  alert("SOS no WIFI");
}
function handleWindowOnline() {
  alert("ALL GOOOOOOD");
}

// title.onclick = handleTitleClick;
// title.onmouseenter = handleMouseEnter;
// title.onmouseleave = handleMouseLeave;
h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);


//
function handleTitleClick2() {
  const currentColor = h1.style.color; //save the current value
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick2);

// 기존에 className이 없을 경우 추가. 있을 경우 바꿈
function handleTitleClick3() {
  const clickedClass = "clicked";
  if (h1.className === clickedClass) {
    h1.className = "";
  } else {
    h1.className = clickedClass;
  }
}

h1.addEventListener("click", handleTitleClick3);

// 있으면 remove, 없으면 add
function handleTitleClick4() {
  const clickedClass = "clicked";
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
}

h1.addEventListener("click", handleTitleClick4);

// toggle
function handleTitleClick5() {
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick5);