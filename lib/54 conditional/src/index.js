"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function typeName(t) {
    return typeof t;
}
const str = typeName('hello world');
const num = typeName(123);
const bool = typeName(true);
const undef = typeName(undefined);
const sym = typeName(Symbol('star'));
const big = typeName(24n);
const func = typeName(function () { });
const obj = typeName(null);
