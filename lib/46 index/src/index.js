"use strict";
const persons = {
// jane: { displayName: 'Jane Doe', email: 'jane@example.com' },
};
persons['john'] = { displayName: 'John Doe', email: 'john@example.com' };
console.log(persons['john']);
delete persons['john'];
