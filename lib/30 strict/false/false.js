"use strict";
const users = [
    { name: 'Oby', age: 12 },
    { name: 'Heera', age: 32 },
];
function getUserAge(name) {
    const user = users.find(user => user.name === name);
    return user.age;
}
