"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const oldPerson = new Person('John', 60);
// How to avoid the duplication of property to rewriting them multiple time
// Typescript give options with access identifier
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
}
const oldPerson2 = new Person('John', 60);
