"use strict";
class Person {
    constructor(_age) {
        this.growOld = () => {
            this._age++;
        };
        this._age = _age;
    }
    age() {
        return this._age;
    }
}
const person = new Person(0);
// person.growOld();
const growOld = person.growOld;
setTimeout(person.growOld, 1000);
growOld();
setTimeout(() => console.log('age: ', person.age()), 2000);
