"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Animal_age;
class Animal {
    constructor(name) {
        _Animal_age.set(this, void 0);
        this.name = name;
        __classPrivateFieldSet(this, _Animal_age, 30, "f");
    }
    move(distanceInMeters) {
        console.log(`${this.name} moved ${distanceInMeters} meters`);
        console.log(`age is ${__classPrivateFieldGet(this, _Animal_age, "f")}`);
    }
}
_Animal_age = new WeakMap();
let dog = new Animal('Puppy');
dog.move(100);
class Bird extends Animal {
    fly(distanceInMeter) {
        console.log(`${this.name} flew ${distanceInMeter} meters`);
    }
}
console.log(process.env.USER);
class Person1 {
    constructor(_age) {
        this._age = _age;
    }
    growOld() {
        this._age++;
    }
    getAge() {
        return this._age;
    }
}
const person = new Person1(10);
person.growOld();
console.log(person.getAge());
