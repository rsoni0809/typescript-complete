"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const adam = new Person('Adam', 120000);
console.log(adam.name, adam.age); // 'Adam', 120000
