"use strict";
let message = "message";
let age = 30;
let isDefined = false;
let notInitialized = undefined;
let notPresent = null;
let penta = Symbol('star');
let regexp = new RegExp('ab+c');
let array = [1, 4, 6];
//OR
let array2 = [1, 2, 3];
// Fixed Length
let tuple = [1, 2];
let newSet = new Set([1, 3, 4, 5]);
let centerObj = {
    x: 10,
    y: 12
};
let centerObj2 = {
    x: 11,
    y: 13
};
// Functions
function add(first, second) {
    return first + second;
}
function log(message) {
    console.log('LOG', message);
}
function sum(...values) {
    return values.reduce((value, acc) => value + acc, 0);
}
let addition;
addition = (first, second) => {
    return first + second;
};
