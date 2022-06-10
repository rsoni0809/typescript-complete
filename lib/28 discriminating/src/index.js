"use strict";
function logResult(result) {
    if (result.isValid) {
        console.log('Success, validated value:', result.validatedValue);
    }
    if (result.isValid === false) {
        console.error('Failure, error reason:', result.errorReason);
    }
}
