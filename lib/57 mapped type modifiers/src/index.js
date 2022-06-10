"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = void 0;
class State {
    constructor(current) {
        this.current = current;
    }
    update(next) {
        this.current = Object.assign(Object.assign({}, this.current), next);
    }
}
exports.State = State;
const state = new State({ x: 0, y: 0 });
state.update({ y: 123 });
console.log(state.current); // { x: 0, y: 123 }
