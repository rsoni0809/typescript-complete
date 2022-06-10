"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    move(distanceInMeters) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
let cat = new Animal('Cat');
cat.move(10);
cat.name = 'Dog';
class Bird extends Animal {
    fly(distanceInMeters) {
        console.log(`${this.name} flew ${distanceInMeters}m.`);
    }
}
