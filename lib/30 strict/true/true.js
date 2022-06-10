"use strict";
const users = [
    { name: 'Oby', age: 12 },
    { name: 'Heera', age: 32 },
];
function getUserAge(name) {
    const user = users.find(user => user.name === name);
    if (user == null) {
        throw new Error(`User not found: ${name}`);
    }
    return user.age;
}
