/*
Description:
    Given a string, write a function that returns the string with a question mark ("?") appends to the end,
    unless the original string ends with a question mark, in which case, returns the original string.

    For example (Input --> Output)
        "Yes" --> "Yes?"
        "No?" --> "No?"
*/
/* 1 version
function ensureQuestion(s) {
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '?') {
            return s;
        }
    }return s +'?';
}*/
function ensureQuestion(s) {
return s.endsWith('?') ? s : s + '?';
}
/*
Sample Tests:

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Ensure question", () => {
    it("Fixed tests", () => {
        assert.strictEqual(ensureQuestion(""),"?","Expected: '?'");
        assert.strictEqual(ensureQuestion("Yes"),"Yes?","Expected: '?'");
        assert.strictEqual(ensureQuestion("No?"),"No?","Expected: '?'");
    });
});*/
