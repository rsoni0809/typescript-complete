"use strict";
const john = {
    name: 'John',
    age: 35,
    location: 'Melbourne',
};
function logGet(obj, key) {
    const value = obj[key];
    console.log('Getting:', key, value);
    return value;
}
const age = logGet(john, 'age'); // 35
console.log(logGet(john, 'email')); // Error
