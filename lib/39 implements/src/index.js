"use strict";
function log(animal) {
    console.log(`Animal ${animal.name}: ${animal.voice()}`);
}
class Cat {
    constructor(name) {
        this.name = name;
    }
    voice() { return 'meow'; }
    ;
}
class Dog {
    constructor(name) {
        this.name = name;
    }
    voice() { return 'woof'; }
    ;
}
log(new Cat('Salem'));
log(new Dog('Lassie'));
