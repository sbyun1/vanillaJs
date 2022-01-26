// Object
// ex. video game (character, player, etc..)

// 만약 object가 없다면, 아래와 같이 하나하나 variable 생성과 함께 값을 넣어줘야 한다.
const playerName = "yeji";
const playerPoints = 121212;
const playerHandsome = true;
const playerFat = "Little bit";
// 여기서 하고싶은 건 sth.sth으로 만들고 싶은 것

/*  player.name
    player.points
    player.handsome
    
    => 위의 코드에서 fat,handsome,point,name 이라는 특성들이 한 개의 개체(entity),즉 player에 대해서 설명하고 있다는 것을 알고 있음

    
  더 정리를 잘하기 위해 위와 같이 코드를 작성해보자.
    // player[0] == name
    // player[1] == points
    const player = ["yeji", 1212, true, "Little bit"];

    주석(comments)을 달아 항목 별로 설명을 해야하기 때문에 비효율적이다(too many variables)
    
  그렇다면 더 정리를 잘 되게 하기 위해서는?
  첫 번째 object를 만들어보자.
  [대괄호]가 아닌 {중괄호}를 사용하여 만들기
*/
const player = {
  name: "yeji",
  points: 10,
  handsome: true,
  fat: true
};

console.log(player);
console.log(player.name);
/* 
console.log() : console=object (그 안의 어딘가 log라는 것이 있다는 뜻)
 - 첫 번째 object를 만든 것 (player.name)
하지만 List는 모든 값이 같은 의미를 갖는 것, whole the same meaning 이기 때문에 이건 List가 아니다.

만약 한 주의 요일 list를 가진다면, 그 list에 있는 모든 것이 한 주의 요일이라는 것을 알고 있기 때문에 설명할 필요가 없다. + 장바구니 목록

그러나 이 object에서는 그게 무엇인지 알 수 없는 property들도 있다.
그래서 "player".sth 으로 표현하는 것 (player를 앞에 붙임으로써 알기 쉽게 작성한 것)
아래의 두 코드는 동일한 값을 출력
*/
console.log(player.name);
console.log(player["name"]);

// update object
// 1. original player 출력
console.log(player);

// 2. player.fat = true -> false로 update
player.fat = false;
player.lastName = "potato"; // 원하는 대로 property를 생성해서 넣을 수 있다.

// 값을 변경하는 경우
player.points = 15;
// 값을 변경하는 것이 아니라 +15만 하고 싶은 경우
player.points = player.points + 15;
console.log(player.points);

/*
constant를 수정할 수 없는 건 여전한 사실이지만, 여기선 object 안의 무언가를 수정(update)하는 것 
object는 여전히 동일한 상태 -> error는 constant 전체를 하나의 값으로서 업데이트하려고 할 때 발생한다. 

  ex. player = false;

여기서 constant는 object이다.
*/

/* array와 object의 차이 정리 */
// array 
// ex. daysOfWeek / toBuy 와 같이 설명할 필요가 없는 property가 들어있는 경우, array를 사용해도 된다.

// object
// ex. video game : 한 명의 player에 대한 정보가 필요한데, ["yeji", 20, true, false] 라고 작성할 경우, 어떤 의미인지 모르기 때문에 설명이 필요한 것.