"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
}
const sheep = new Animal('sheep');
console.log(sheep.name); // Allow
sheep.name = 'wolf'; // Disallow
