"use strict";
function makeDate(timestampOrYear, month, day) {
    if (month != null && day != null) {
        return new Date(timestampOrYear, month - 1, day);
    }
    else {
        return new Date(timestampOrYear);
    }
}
const doomsday = makeDate(2000, 1, 1); // 1 Jan 2000
const epoch = makeDate(0); // 1 Jun 1970
