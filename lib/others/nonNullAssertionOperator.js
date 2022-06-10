"use strict";
let dimension;
function initialize() {
    dimension = { x: 0, y: 10 };
}
initialize();
console.log(`Values are ${dimension.x} and ${dimension.y}`); // Values are 0 and 10;
function sendEmail(email) {
    console.log(`Sent email to ${email}`);
}
function ensureContactable(person) {
    if (person.email == null)
        throw new Error(`Person ${person} is not contactable`);
}
function contact(person) {
    ensureContactable(person);
    sendEmail(person.email);
    // sendEmail(person.email!);
}
