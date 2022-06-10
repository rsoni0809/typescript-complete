"use strict";
var _a;
const nums = [0, 1, 2];
if (nums[3] != null) {
    const example = nums[3]; // Not okay!
    console.log(example.toFixed(2)); // Error at runtime
}
for (const num of nums) {
    console.log(num.toFixed(2));
}
nums.forEach(num => console.log(num.toFixed(2)));
const trusted = [0, 1, 2];
console.log((_a = trusted[2]) === null || _a === void 0 ? void 0 : _a.toFixed(2));
