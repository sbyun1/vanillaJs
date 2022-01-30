const playerName = "jiyo";
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = "little bit";

//각 데이터들이 무엇을 의미하는지 가시적으로 나타나지 않아서 부적합
const arrayPlayer = ["jiyo", 1212, false, "little bit"];

//Object: property를 가진 데이터를 저장해주며 {} 사용
const player = {
    name:"jiyo",
    points: 10,
    fat: true
};

console.log(player);

//object의 property 불러오는 방법 두가지
console.log(player.name);
console.log(player["name"]);

//update
//property를 바꾸는 것은 가능하지만 선언된 object 자체를 바꾸는 것은 불가능
player.fat = false;
player.points = player.points + 15;
console.log(player);

/* const 타입의 object 변경 -> 에러
player = false;
*/

//insert
player.lastName = "potato";
console.log(player);