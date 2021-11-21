'user strict';
//Object-oriented programming
// class : template
// object : instance of class
// Javascript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  //constructor
  constructor(name, age) {
    //fields
    this.name = name;
    this.age = age;
  }
  //methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const noa = new Person('noa', 20);
console.log(noa.name);
console.log(noa.age);
noa.speak();

// 2. Getter and setter
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    // 사용자가 getter를 정의하는 순간 this.age는 메모리의 데이터를 읽어오는 것이 아니라 getter 호출
    // setter를 정의하는 순간 =age; 값을 할당할 때 바로 메모리의 값을 할당하는 것이 아니라 setter 호출
    // --> setter 안에서 전달된 value를 this.age로 할당할 때 메모리의 값이 아닌 setter 호출
    // --> 무한 반복으로 call stack이 닫혔다는 에러 발생
    // --> getter setter 이름을 다르게 설정해야 함(this.age -> this._age)
  }
  get age() { //사용자가 get age 호출하면
    return this._age;
  }
  set age(value) { // 새로운 value를 받으면
    // if (value < 0) {
    //   throw Error('age can not be negative!');
    // }
    this._age = value < 0 ? 0 : value;
  }
}
const user1 = new User('Steve', 'Jobs', -1);
console.log(user1.age);


// 3. Fields (public, private)
// Too soon!
// 
class Experiment {
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }
  static printPublisher() {
    console.log(Article.publisher);
  }
}
// class 안에 있는 fields와 method들은 새로운 object를 만들 때마다 그대로 복제되어
// 값만 우리가 지정한 값으로 변경되어 만들어짐
// 간혹 obj에 상관없이, 데이터에 상관없이 class가 가지고 있는 고유한 값과
// 데이터에 상관없이 동일하게 반복적으로 사용되어지는 method가 있을 수 있다.
// --> 그런 것들을 static이란 키워드를 붙이면 obj와 상관없이 class 자체에 연결되어있음

const article1 = new Article(1);
const article2 = new Article(2);

console.log(Article.publisher);
//static은 obj마다 할당되는 것이 아니라 class 자체에 붙어있음
//static 함수 호출할 때 class 이용
Article.printPublisher();


// 5. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape { }
class Triangle extends Shape {
  // 필요한 함수만 재정의 --> overriding
  draw() {
    super.draw();
    console.log('▲');
  }
  getArea() {
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking : instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());