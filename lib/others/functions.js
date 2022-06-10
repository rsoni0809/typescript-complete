"use strict";
/**
* @returns true if input string is palindrome
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrome = void 0;
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
exports.isPalindrome = isPalindrome;
console.log(isPalindrome('MADAM'));
