"use strict";
const personResponse = {
    "name": "john",
    "email": "john@example.com",
    "firstName": "John",
    "lastName": "Doe"
};
function processResponse(person) {
    console.log('Full name:', `${person.firstName} ${person.lastName}`);
}
