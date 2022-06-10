"use strict";
/** A FIFO (First In First Out) collection */
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) { this.data.push(item); }
    pop() { return this.data.shift(); }
}
const queue = new Queue();
queue.push(123);
queue.push(456);
console.log(queue.pop().toPrecision(1));
console.log(queue.pop().toPrecision(1));
