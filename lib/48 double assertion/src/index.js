"use strict";
let point2 = { x: 0, y: 0 };
let point3 = { x: 10, y: 10, z: 10 };
let person = { name: 'john', email: 'john@example.com' };
point2 = point3;
point3 = point2; // Error
point3 = point2; // Ok: I trust you
person = point3; // Error
point3 = person; // Error
point3 = person; // Error: I don't trust you enough
point3 = person; // Ok: I doubly trust you
