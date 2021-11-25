// Object
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaSctipt are instance of Object
// Object = { key:value }

//const name = 'noa'; //변수 하나당 값 하나
//const age = 20;
//print(name, age); //출력 함수를 만들려면 변수를 각각 파라미터로 전달

// 1. Literals and properties
//object 만드는 방법 :
const obj1 = {} // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) { //함수를 정의하여 쓸 때도 파라미터 넣기
  console.log(person.name);
  console.log(person.age);
}
// --> 관리하기 힘들고 logical게 그룹으로 생각하기 어렵기 때문에
// 개선을 위해 object 사용
const noa = { name: 'noa', age: 20 };
print(noa);

// with Javascript magic(dynamically typed language)
// can add properties later
noa.hasJob = true;
console.log(noa.hasJob);

//can delete properties later
delete noa.hasJob;
console.log(noa.hasJob);

// 2. Computed properties
// key should be always String
console.log(noa.name);
console.log(noa['name']);
noa['hasJob'] = true;
console.log(noa.hasJob);

function printVal(obj, key) {
  console.log(obj[key]);
}
printVal(noa, 'name');
printVal(noa, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
// const person4 = makePerson('noa', 20);
const person4 = new Person('noa', 20);
console.log(person4);
// function makePerson(name, age) { //class,template과 비슷 
//   return {
//     name,
//     age,
//   };
// }

// 4. Constructor Function
function Person(name, age) {
  // this={}
  this.name = name;
  this.age = age;
  // return rhis;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in noa);
console.log('age' in noa);
console.log('random' in noa);
console.log(noa.random);

// 6. for..in vs for..of
// for(key in obj)
console.clear();
for (key in noa) {
  console.log(key);
}

//for (value of iterable)
const array = [1, 2, 4, 5];
//원래 방법
// for(let i=0; i<array.length;i++){
//   console.log(array[i]);
// }
//향상for
for (value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1,obj2,obj3...])
const user = { name: 'noa', age: '20' };
const user2 = user;
console.log(user);

// obj를 복제하자
// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

//new way
const user4 = {};
Object.assign(user4, user); //복사하고자 하는 것 전달
console.log(user4);

const user5 = Object.assign({}, user);
console.log(user5);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);//뒤의 값이 앖의 값을 덮는다.
console.log(mixed.color);
console.log(mixed.size);
