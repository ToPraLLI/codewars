/*
Description:

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example (Input => Output):
35231 => [1,3,2,5,3]
0     => [0]
*/
function digitize(n) {
    let result = [];
    let str = n.toString();
    for(let i = str.length - 1; i >= 0; i--){
        result.push(Number(str[i]));
    }
    return result;
}
/*
Sample Tests:
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(digitize(35231),[1,3,2,5,3]);
    assert.deepEqual(digitize(0),[0]);
  });
});
*/