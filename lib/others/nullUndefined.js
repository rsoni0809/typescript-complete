"use strict";
function decorate(value) {
    if (value == null) { // this is also equivalent to undefined == null // true
        return value;
    }
    return `-- ${value.trim()} -- `;
}
console.log(decorate('hello')); // -- hello -- 
console.log(decorate(null)); // null
console.log(decorate(undefined)); // undefined
