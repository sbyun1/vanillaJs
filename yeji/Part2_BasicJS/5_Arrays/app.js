// Array
/*
  How we can organize our data (Data 정리하는 법)
  Data Structure(데이터 구조) 중 하나
  데이터를 어떻게 가능한 최선의 방법으로 빠르게 정리할 수 있는가?
  우리는 자료의 검색이나 삽입을 빠르게 할 수 있는 데이터 저장 방법에 대해 생각하는데 그 중 사용하는 방법이 array(배열)이다.

// Array를 사용하지 않고 작성하기
    const mon = "mon";
    const tue = "tue";
    const wed = "wed";
    const thu = "thu";
    const fri = "fri";
    const sat = "sat";

    const daysOfWeek = mon + tue + wed + thu + fri + sat ;

daysOfWeek의 값을 모두 가져올 수는 있으나, 내가 원하는 값 하나만 가져오는 것은 불가능
    console.log(daysOfWeek);
*/

/* array를 이용하여 daysOfWeek 만들기
    const daysOfWeek = [mon, tue, wed, thu, fri, sat];
*/
 const daysOfWeek = ["mon", "tue", "wed","thu","fri","sat"];
 //const nonsense = [1, 2, "hello", false, null, true, undefined, "yeji"];

console.log(daysOfWeek);

/* 
  JavaScript의 Array Rule
    1. 시작과 끝에 대괄호[]를 사용해야한다.
    2. array 안의 각각 항목은 ,(쉼표)로 분리되어야 한다.

  => array 안에 number, String, boolean, null, undefined 다 넣어서 배열을 만들 수 있다.
*/  

// 만약 array 안의 data에 접근하고 싶다면, variableName을 적고, [] 안에 index 값을 넣어 가져온다.
console.log(daysOfWeek[0]);
//주의할 점 : array의 경우, index 값이 0부터 시작한다는 것 

/* 애플리케이션을 만들 때, To-Do List를 만들 수 있도록 하는 것이 Array를 사용하는 것 
   배열 안에 그 날 해야할 일(To-Do List)을 작성하여 넣는 것*/

// Get Item from Array
  // daysOfWeek array에서 "fri" 값 가져오기
console.log(daysOfWeek[4]);

// Add one more day to the array
  // arrayName.push : array 안에 항목 하나 추가하기
daysOfWeek.push("sun");
console.log(daysOfWeek);

// Shopping cart List
const apple="apple";
const potato = "potato";
// 이런 식으로 나열하면 효율성이 떨어지기 때문에 array를 사용하여 담아주자
const toBuy = ["potato","tomato","pizza"];
toBuy.push("banana");

console.log(toBuy);
