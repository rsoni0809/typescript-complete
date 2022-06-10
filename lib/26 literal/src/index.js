"use strict";
function rollDice() {
    return (Math.floor(Math.random() * 6) + 1);
}
if (rollDice() === 7) {
    throw new Error('Not possible!');
}
