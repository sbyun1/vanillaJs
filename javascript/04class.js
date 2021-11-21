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
  }
}

const user1 = new User('Steve', 'Jobs', -1);
console.log(user1.age);