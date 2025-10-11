/*
Description:
    You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

        If the string's length is odd, return the middle character.

        If the string's length is even, return the middle 2 characters.

Examples:
        "test" --> "es"
        "testing" --> "t"
        "middle" --> "dd"
        "A" --> "A"
*/
function getMiddle(s) {
    const middle = Math.floor(s.length / 2);
    if (s.length % 2 === 0) {
        // Четная длина: возвращаем 2 средних символа/Even length: we return 2 middle characters
        return s.substring(middle - 1, middle + 1);
    } else {
        // Нечетная длина: возвращаем 1 средний символ/Odd length: we return 1 middle character
        return s.substring(middle, middle + 1);
    }
}
/*
Sample Tests:

    describe("GetMiddle", function() {
        const { assert } = require('chai');

        function doTest(input, expected) {
            const message = `for input ${JSON.stringify(input)}\n`;
            const actual = getMiddle(input);
            assert.strictEqual(actual, expected, message);
        }

        it("Sample Tests", function() {
            doTest("test", "es");
            doTest("testing", "t");
            doTest("middle", "dd");
            doTest("A", "A");
        });
    });
*/
