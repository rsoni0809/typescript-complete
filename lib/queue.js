// // A FIFO Collection
// class Queue {
//     data: number[] = [];
//     push(item: number) {
//         this.data.push(item);
//     }
//     pop() {
//         return this.data.shift();
//     }
// }
// // duplicate code as number, string, other data types we have to make
// class NumberQueue extends Queue {
//     push(item: number) {
//         super.push(item);
//     }
//     pop() {
//         return super.pop()
//     }
// }
// const queue = new NumberQueue();
// queue.push(123);
// //queue.push('122');
// console.log(queue.pop()) //remove 123
// console.log(queue.pop()) // error string
// Generic Type Parameter
class QueueGeneric {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.shift();
    }
}
const queue1 = new QueueGeneric();
queue1.push(11);
console.log(queue1);
