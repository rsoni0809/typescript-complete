"use strict";
// When we initialize typescript configuration option with command
// npx tsc --init //successfully create tsconfig.json
// strict optin by default true
// strict is true then all other following options are implicitly true
// Still we can make individual options as false but other options will remain true
//
// strict false
// class Point3 {
//     x: number;
//     y: number;
//     move(x: number, y: number) {
//         this.x += x;
//         this.y += y;
//     }
// }
// const point = new Point3();
// point.move(1, 4);
// strict true:
class Point3 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    move(x, y) {
        this.x += x;
        this.y += y;
    }
}
const point = new Point3(0, 0);
point.move(1, 4);
const users = [
    {
        name: 'John',
        age: 22
    },
    {
        name: 'Meesh',
        age: 29
    }
];
function getUserAge(name) {
    const user = users.find((user) => user.name === name);
    if (!user) {
        throw new Error(`Does not found ${name}`);
    }
    return user === null || user === void 0 ? void 0 : user.age; //Age does not exist on User3[] reason it might be null in any case if user not found
}
getUserAge('Meesh');
