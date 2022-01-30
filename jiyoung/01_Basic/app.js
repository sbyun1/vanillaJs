const a = 50;
const b = 2;
let myName = "jiiyo";

// 일반적으로 const 사용/변수 업데이트 해야하는 경우만 let 사용
// var는 옛날 방식 const, let을 사용하자
// always const, sometimes let, never var

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "jiyoung";

console.log("your new name is " + myName);

//--------------------------------------------------------

const amIFat = true;
console.log(amIFat);

//--------------------------------------------------------

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = [mon, tue, wed, thu, fri, sat];

//Get Item from Array
console.log(daysOfWeek[4]);

//Add one more day to the array
daysOfWeek.push(sun);
console.log(daysOfWeek);