let user = { id: "user-1234" };
let product = { id: "product-XHH-22" };
let point2D = { x: 0, y: 11 };
let point3D = { x: 11, y: 22, z: 33 };
function takesPoint2D(point) {
    // ...
}
function takesPoint3D(point) {
    // ...
}
function load() {
    return "hello";
}
let hello = load();
if (typeof hello === 'string') {
    const trimmed = hello.trim();
}
const assertionTrimmed = hello.trim(); //type assertion to save any condition for unkown
let newNumber;
newNumber = '1000';
let otherNumber = '100';
if (typeof newNumber === 'number') {
    const num = newNumber;
}
const num_2 = newNumber;
const num_3 = +otherNumber;
console.log(num_3);
